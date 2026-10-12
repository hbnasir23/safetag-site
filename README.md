# SafeTag website

A one-page site that explains SafeTag and offers the latest Android test
build for download. It is a stopgap until the app is on the Play Store.

Plain HTML, no build step. Hosted on Vercel, which redeploys on every push to
`main`.

| File | What it is |
|------|------------|
| `index.html` | The page |
| `SafeTag.apk` | The build people download (arm64, for modern phones) |
| `version.json` | Version, build date and size shown under the download button |
| `vercel.json` | Makes the APK download as a file with the right type |
| `publish.ps1` | Puts a new build on the site |

## Putting a new build up

```
cd C:\fyp\safetag
flutter build apk --release --split-per-abi

cd C:\fyp\safetag-site
powershell -ExecutionPolicy Bypass -File publish.ps1
```

The script copies the APK, updates `version.json`, commits and pushes. The
site shows the new build about a minute later.

## Notes

- The APK is the arm64 build, about 24 MB. Nearly every Android phone from
  the last several years uses it. A very old or unusual phone may refuse to
  install it; the universal build (`app-release.apk`, about 63 MB) works on
  those.
- Every published build stays in the git history, so the repository grows by
  the size of the APK each time.
