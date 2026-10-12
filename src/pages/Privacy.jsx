import { Link } from 'react-router-dom';

import PageHead from '../components/PageHead.jsx';
import { UPDATED } from '../content/site.js';
import { usePageTitle } from '../hooks.js';

export default function Privacy() {
  usePageTitle('Privacy policy | SafeTag');

  return (
    <>
      <PageHead narrow kicker="Legal" title="Privacy policy">
        SafeTag handles some of the most personal information there is: where you are, and who you trust. This page
        says plainly what we collect and what we do with it.
      </PageHead>

      <section>
        <div className="wrap narrow prose">
          <p className="updated">Last updated {UPDATED}. This policy covers the SafeTag test build and this website.</p>

          <h2>The short version</h2>
          <ul>
            <li>
              We collect what SafeTag needs to work: your account details, your location while you use safety
              features, and the contacts you choose.
            </li>
            <li>Your location is shown only to the trusted contacts you add, within the permissions you give them.</li>
            <li>We don't sell your information and we don't show adverts.</li>
            <li>This is a student project in testing. Don't put anything into it you couldn't afford to lose.</li>
          </ul>

          <h2>What we collect</h2>
          <h3>Account</h3>
          <p>
            Your name, email address, phone number and password (stored in encrypted form by our sign-in provider). A
            profile photo if you add one.
          </p>
          <h3>Location</h3>
          <p>
            Your position while an SOS is active or a journey is running, and the path you travelled during it. With a
            SafeTag wearable, its position is also reported every few minutes when nothing is happening. Routes and
            safe zones you save are stored too.
          </p>
          <h3>Trusted contacts</h3>
          <p>
            The names, phone numbers and email addresses of the people you add as contacts, the order they should be
            alerted in, and what you allow each to see.
          </p>
          <h3>Alerts and journeys</h3>
          <p>
            A record of each alert and journey: when it started and ended, how it ended, and which contacts were
            notified and responded.
          </p>
          <h3>Device information</h3>
          <p>
            For a SafeTag wearable: battery level, signal strength and software version. For your phone: a notification
            token so we can send you alerts.
          </p>
          <h3>This website</h3>
          <p>
            If you use the contact form, your name, email address and message are emailed to us. The site itself sets
            no tracking cookies.
          </p>

          <h2>Why we use it</h2>
          <ul>
            <li>To send your alerts and location to your trusted contacts.</li>
            <li>To tell contacts when you start a journey, leave your route, or arrive.</li>
            <li>To show you and your contacts a history of past alerts and journeys.</li>
            <li>To find and fix problems in the test build.</li>
            <li>To answer messages you send us.</li>
          </ul>

          <h2>Who can see your information</h2>
          <p>
            <strong>Your trusted contacts.</strong> Each sees only what you allow: live location, journeys and safe
            zones are separate permissions. During an SOS, every contact can see your location until the alert ends.
          </p>
          <p>
            <strong>The SafeTag team.</strong> Team members can access the database to run and debug the service.
          </p>
          <p>
            <strong>Services we rely on.</strong> SafeTag is built on other companies' services, which process data
            for us:
          </p>
          <ul>
            <li>Supabase stores the database and handles sign-in. Our data is held in its Tokyo region.</li>
            <li>Railway runs the server that receives messages from the wearable.</li>
            <li>Google Firebase delivers notifications to phones.</li>
            <li>Google Maps provides the maps, place search and route planning.</li>
            <li>Vercel hosts this website, and Web3Forms delivers contact form messages to our inbox.</li>
          </ul>
          <p>We don't sell your information or share it with advertisers.</p>

          <h2>How long we keep it</h2>
          <p>
            While your account exists. Because this is a test build, we also reset the test server from time to time,
            which deletes all accounts and their data.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>You can change what each contact may see, or remove a contact, at any time in the app.</li>
            <li>
              You can turn off location sharing in the app's settings. Safety features that depend on it will stop
              working.
            </li>
            <li>
              To see the data we hold about you, or to have your account and data deleted,{' '}
              <Link to="/contact?topic=Privacy">send us a message</Link>.
            </li>
          </ul>

          <h2>Other people's details</h2>
          <p>
            When you add a trusted contact you give us their name, number and email. Please make sure they know. They
            receive alerts about you only after they sign up themselves.
          </p>

          <h2>Security</h2>
          <p>
            Connections between the app and our servers are encrypted, and the database enforces who may read what.
            The wearable's connection to our server is not yet encrypted in the test build. No system is perfectly
            secure, and a test build is less mature than a finished product.
          </p>

          <h2>Children</h2>
          <p>
            SafeTag is not intended for children to sign up to on their own. A parent or guardian should set it up
            with them.
          </p>

          <h2>Changes</h2>
          <p>If we change this policy we will update the date at the top of this page.</p>

          <h2>Contact</h2>
          <p>
            Questions about privacy: <Link to="/contact?topic=Privacy">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
