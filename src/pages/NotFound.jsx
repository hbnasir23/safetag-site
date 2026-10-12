import { Link } from 'react-router-dom';

import PageHead from '../components/PageHead.jsx';
import { usePageTitle } from '../hooks.js';

export default function NotFound() {
  usePageTitle('Page not found | SafeTag');

  return (
    <>
      <PageHead kicker="Not found" title="That page doesn't exist.">
        The link may be old, or the address mistyped.
      </PageHead>
      <section>
        <div className="wrap">
          <Link className="button" to="/">
            Go to the home page
          </Link>
        </div>
      </section>
    </>
  );
}
