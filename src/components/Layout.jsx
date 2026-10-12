import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
];

function Logo() {
  return (
    <Link className="logo" to="/">
      <img src="/icon.png" alt="" width="30" height="30" />
      SafeTag
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Any navigation closes the phone menu.
  useEffect(() => setOpen(false), [pathname, hash]);

  const links = NAV.map((n) => (
    <NavLink key={n.to} to={n.to} end={n.end}>
      {n.label}
    </NavLink>
  ));

  return (
    <header className="site-header">
      <div className="wrap">
        <Logo />
        <nav className="nav" aria-label="Main">
          {links}
          <Link className="button" to="/#download">
            Get the app
          </Link>
        </nav>
        <div className="menu">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="phone-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          {open && (
            <nav className="menu-list" id="phone-menu" aria-label="Main">
              {links}
              <Link to="/#download">Get the app</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <Logo />
            <p>A wearable and an app that send an SOS and your live location to the people you trust.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link to="/#how">How it works</Link></li>
              <li><Link to="/#device">The device</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/#download">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/terms">Terms and conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>&copy; 2026 SafeTag. A final-year engineering project.</span>
          <span>SafeTag is not an emergency service.</span>
          <span>Photographs from Pexels.</span>
        </div>
      </div>
    </footer>
  );
}

/** A new page starts at the top; a link like /#download scrolls to that section. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // The section may not be on screen until the page has rendered.
      const id = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return () => cancelAnimationFrame(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollOnNavigate();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
