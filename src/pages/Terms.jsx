import { Link } from 'react-router-dom';

import PageHead from '../components/PageHead.jsx';
import { UPDATED } from '../content/site.js';
import { usePageTitle } from '../hooks.js';

export default function Terms() {
  usePageTitle('Terms and conditions | SafeTag');

  return (
    <>
      <PageHead narrow kicker="Legal" title="Terms and conditions">
        The rules for using the SafeTag test build and this website. Please read the part about emergencies.
      </PageHead>

      <section>
        <div className="wrap narrow prose">
          <p className="updated">Last updated {UPDATED}.</p>

          <h2>1. What SafeTag is</h2>
          <p>
            SafeTag is a final-year engineering project: an Android app, a server, and a wearable device that is still
            in development. What you can download from this site is a test build, shared so that friends, classmates
            and other volunteers can try it and tell us what they find.
          </p>

          <h2>2. SafeTag is not an emergency service</h2>
          <p>
            SafeTag sends alerts to people you have chosen. It does not contact the police, an ambulance or any other
            emergency service. Alerts can be delayed or fail to arrive, for example when there is no mobile signal, no
            internet connection, a flat battery, or a fault in the software.
          </p>
          <p>
            <strong>
              Do not rely on SafeTag as your only way of getting help. In an emergency, call your local emergency
              services.
            </strong>
          </p>

          <h2>3. Using the test build</h2>
          <ul>
            <li>
              The test build is provided as it is, without any promise that it will work, be available, or be free of
              faults.
            </li>
            <li>We may change it, take it offline, or delete all test data at any time, without notice.</li>
            <li>
              Location is only as accurate as your phone's or the wearable's GPS, which can be wrong by tens of metres
              or more, especially indoors.
            </li>
          </ul>

          <h2>4. Your account</h2>
          <p>
            Give accurate details when you sign up, keep your password to yourself, and tell us if you think someone
            else has used your account. You are responsible for what happens under your account.
          </p>

          <h2>5. Trusted contacts and consent</h2>
          <p>
            Only add people as trusted contacts with their agreement. Only watch another person's location with their
            knowledge and permission. Using SafeTag to track or monitor someone without their consent is not allowed,
            and we will remove accounts that do it.
          </p>

          <h2>6. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>send false alerts on purpose, or use SafeTag to harass or alarm anyone;</li>
            <li>try to access other people's accounts or data;</li>
            <li>interfere with the service, or attempt to overload it;</li>
            <li>use SafeTag for anything unlawful.</li>
          </ul>

          <h2>7. The device and prices</h2>
          <p>
            The wearable is not on sale. Descriptions of it on this site describe what we are building and may change.
            Prices shown are planning figures, not offers, and no order can be placed.
          </p>

          <h2>8. Your information</h2>
          <p>
            How we handle your information is set out in the <Link to="/privacy">privacy policy</Link>, which forms
            part of these terms.
          </p>

          <h2>9. Our responsibility</h2>
          <p>
            SafeTag is made by students as an academic project and offered free of charge. To the extent the law
            allows, the SafeTag team is not liable for loss or harm arising from use of the test build, including an
            alert that is delayed, misdirected or not delivered.
          </p>

          <h2>10. Ending use</h2>
          <p>
            You can stop using SafeTag at any time by uninstalling the app, and you can ask us to delete your account.
            We may suspend or remove an account that breaks these terms.
          </p>

          <h2>11. Changes to these terms</h2>
          <p>
            We may update these terms as the project develops. The date at the top of the page shows when they last
            changed.
          </p>

          <h2>12. Governing law</h2>
          <p>These terms are governed by the laws of Pakistan.</p>

          <h2>13. Contact</h2>
          <p>
            Questions about these terms: <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
