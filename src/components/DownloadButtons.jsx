import { useBuildInfo } from '../hooks.js';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/** Android download, the iPhone "in development" marker, and the build line. */
export default function DownloadButtons() {
  const build = useBuildInfo();
  const built = build
    ? new Date(build.built).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <>
      <div className="actions">
        {/* A plain link, not a router link: this is a file to download. */}
        <a className="button" href="/SafeTag.apk" download>
          <DownloadIcon />
          <span>
            <small>Download for</small>Android
          </span>
        </a>
        <span className="button unavailable" role="img" aria-label="iPhone version in development">
          <span>
            <small>In development</small>iPhone (iOS)
          </span>
        </span>
      </div>
      <p className="small" style={{ marginTop: 14 }}>
        {build
          ? `Android 6 or newer. ${build.sizeMb} MB. Version ${build.version}, built ${built}.`
          : 'Android 6 or newer. About 24 MB.'}
      </p>
    </>
  );
}
