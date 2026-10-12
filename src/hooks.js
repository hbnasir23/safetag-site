import { useEffect, useState } from 'react';

/** Sets the browser tab title while a page is shown. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/** Details of the APK currently on the site (public/version.json, rewritten
 *  by publish.ps1). Null until loaded, or if it can't be read. */
export function useBuildInfo() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    let live = true;
    fetch('/version.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((v) => live && setInfo(v))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return info;
}
