# Puts the newest SafeTag build on the website.
#
#   1. In C:\fyp\safetag run:   flutter build apk --release --split-per-abi
#   2. Then run this script:    powershell -ExecutionPolicy Bypass -File publish.ps1
#
# It copies the arm64 APK (the one modern phones use) here, updates
# version.json, and pushes. Vercel redeploys the site from the push.
param([string]$App = (Join-Path $PSScriptRoot "..\safetag"))

$ErrorActionPreference = "Stop"
$apk = Join-Path $App "build\app\outputs\flutter-apk\app-arm64-v8a-release.apk"
if (-not (Test-Path $apk)) { throw "No APK at $apk - build it first (see the top of this file)." }

Copy-Item $apk (Join-Path $PSScriptRoot "SafeTag.apk") -Force
$file = Get-Item $apk

# "version: 1.0.0+1" in pubspec.yaml -> "1.0.0"
$version = "1.0.0"
$line = Select-String -Path (Join-Path $App "pubspec.yaml") -Pattern '^version:\s*([0-9.]+)' | Select-Object -First 1
if ($line) { $version = $line.Matches[0].Groups[1].Value }

$info = [ordered]@{
    version = $version
    built   = $file.LastWriteTimeUtc.ToString("yyyy-MM-ddTHH:mm:ssZ")
    sizeMb  = [math]::Round($file.Length / 1MB)
}
# Written without a BOM so browsers parse it as plain JSON.
[IO.File]::WriteAllText((Join-Path $PSScriptRoot "version.json"), ($info | ConvertTo-Json))

Set-Location $PSScriptRoot
git add SafeTag.apk version.json
git commit -m "SafeTag $version build of $($file.LastWriteTime.ToString('yyyy-MM-dd HH:mm'))"
git push
Write-Host "Published SafeTag $version ($($info.sizeMb) MB). The site updates in about a minute."
