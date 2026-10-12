import { Link } from 'react-router-dom';

import PageHead from '../components/PageHead.jsx';
import { SUPERVISORS, TEAM } from '../content/site.js';
import { usePageTitle } from '../hooks.js';

function Person({ name, role, bio, photo }) {
  return (
    <div className="person">
      {photo ? (
        <img className="photo" src={photo} alt={name} loading="lazy" />
      ) : (
        <div className="photo">Photo</div>
      )}
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{bio}</p>
    </div>
  );
}

export default function About() {
  usePageTitle('About us | SafeTag');

  return (
    <>
      <PageHead kicker="About us" title="We're building the button we wish everyone had.">
        SafeTag is a final-year engineering project. Four students and two supervisors, working on one problem: asking
        for help should take one press, not a phone call.
      </PageHead>

      <section>
        <div className="wrap">
          <div className="wide-photo">
            <img src="/img/campus.jpg" alt="Students on the steps of a university building" width="1400" height="600" />
          </div>
          <div className="two-col" style={{ marginTop: 56 }}>
            <div>
              <h2>Why we started</h2>
            </div>
            <div>
              <p>
                Most safety apps assume you can take out your phone, unlock it, find the app and explain what's wrong.
                In the moments that matter, you often can't do any of those things.
              </p>
              <p>
                We wanted something that works with a single press, that can stay silent when it needs to, and that
                keeps working when the phone is dead, locked or gone. That became SafeTag: a small wearable with its
                own connection, and an app that does the same job in the meantime.
              </p>
            </div>
          </div>
          <div className="two-col" style={{ marginTop: 48 }}>
            <div>
              <h2>Where we are</h2>
            </div>
            <div>
              <p>
                The app works today. It sends loud and silent SOS alerts, shares live location, follows planned
                journeys and watches safe zones. The server that receives alerts from the wearable is running and
                tested.
              </p>
              <p>The wearable itself is still being built. Until it's ready, your phone plays its part.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <p className="kicker">The team</p>
          <h2>Who is building it.</h2>
          <div className="people">
            {TEAM.map((p) => (
              <Person key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="kicker">Supervisors</p>
          <h2>Who is guiding it.</h2>
          <div className="people two">
            {SUPERVISORS.map((p) => (
              <Person key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Want to help us test it?</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            Install the app, try to break it, and tell us what happened.
          </p>
          <div className="actions">
            <Link className="button" to="/#download">
              Get the app
            </Link>
            <Link className="button ghost" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
