import DeviceDrawing from '../components/DeviceDrawing.jsx';
import DownloadButtons from '../components/DownloadButtons.jsx';
import Faq from '../components/Faq.jsx';
import { usePageTitle } from '../hooks.js';

const NUMBERS = [
  ['1 press', 'to call for help'],
  ['3 seconds', 'hold for a silent SOS'],
  ['45 seconds', 'off your route before contacts are told'],
  ['25 metres', 'the tightest route alert zone'],
];

const HOW = [
  ['You press', 'On the SafeTag wearable, or the SOS button in the app. Press twice for an alarm, or hold for a silent alert.'],
  ['SafeTag sends', 'The alert and your position reach our server over the mobile network in about two seconds.'],
  ['Contacts are alerted', 'Their phones ring like a call and open a live map of where you are.'],
  ['It keeps trying', "If the first person doesn't respond, the next person in your list is alerted, and so on."],
];

const INSTALL = [
  ['Download', 'Tap the Android button. If your browser warns about the file, choose "Download anyway".'],
  ['Open the file', 'Tap the download notification, or find SafeTag.apk in your Downloads folder.'],
  ['Allow the install', 'Android will ask you to allow installs from your browser. Switch it on, go back, and tap Install.'],
  ['Sign up', 'Create an account, allow location and notifications, then invite a trusted contact.'],
];

const SPECS = [
  ['Own SIM', 'Sends alerts, and can call your contacts, with no phone involved.'],
  ['Built-in GPS', 'Reports its position every few seconds during an alert or a journey.'],
  ['Microphone', 'Your contacts can hear what is happening. There is no speaker, so nobody near you hears them.'],
  ['Buzzer', 'A loud alarm for the audible SOS, and a short buzz if you drift off your route.'],
  ['One button', 'Large enough to find by feel in a pocket.'],
];

const QUESTIONS = [
  {
    q: 'Do I need the wearable to use SafeTag?',
    a: "No. The app turns your phone into the SafeTag, and nearly everything on this page works that way today. The wearable is for when you can't use your phone.",
  },
  {
    q: 'Is there an iPhone version?',
    a: 'Not yet. The iPhone app is in development. For now SafeTag is for Android.',
  },
  {
    q: 'Who can see my location?',
    a: 'Only the trusted contacts you add, and only what you allow each of them. During an SOS every contact can see where you are.',
  },
  {
    q: 'Should I rely on this in a real emergency?',
    a: 'Not as your only way to get help. SafeTag is a student project in testing. Use it alongside calling your local emergency services, not in place of them.',
  },
  {
    q: 'Will my account be kept?',
    a: 'We reset the test server from time to time, so you may need to sign up again. Installing a newer version over the old one keeps your account.',
  },
];

function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map(([title, text]) => (
        <li key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}

/** A photograph beside a block of text; `flip` puts the photo on the right. */
function Row({ photo, alt, flip = false, kicker, title, children }) {
  return (
    <div className={flip ? 'row flip' : 'row'}>
      <div className="row-photo">
        <img src={photo} alt={alt} width="1200" height="800" loading="lazy" />
      </div>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  usePageTitle('SafeTag: help, one press away');

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="kicker">Personal safety, wearable and app</p>
            <h1>
              Help, <em>one press</em> away.
            </h1>
            <p className="lead">
              SafeTag sends an SOS and your live location to the people you trust. No unlocking your phone, no typing,
              no explaining where you are.
            </p>
            <DownloadButtons />
          </div>
          <figure>
            <img src="/img/hero.jpg" alt="A woman standing outdoors, looking at her phone" width="1400" height="933" />
          </figure>
        </div>
      </section>

      <section style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="numbers">
            {NUMBERS.map(([figure, label]) => (
              <div key={figure}>
                <b>{figure}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="tint">
        <div className="wrap">
          <p className="kicker">How it works</p>
          <h2>From one press to people on their way.</h2>
          <Steps items={HOW} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <Row
            photo="/img/night.jpg"
            alt="A person walking alone down a lit street at night"
            kicker="SOS"
            title="Loud when you want attention. Silent when you don't."
          >
            <p>
              Some situations call for noise. Others get worse if anyone notices you asking for help. SafeTag has one
              button and two ways to press it.
            </p>
            <ul>
              <li>
                <strong>Press twice</strong> for an alarm that draws attention, plus the alert to your contacts.
              </li>
              <li>
                <strong>Hold for three seconds</strong> for a silent alert. No sound, no light.
              </li>
              <li>
                <strong>Cancel it yourself</strong> the moment you're safe.
              </li>
            </ul>
          </Row>

          <Row
            flip
            photo="/img/map.jpg"
            alt="A hand holding a phone that shows a map"
            kicker="Live location"
            title="They see where you are, not where you were."
          >
            <p>
              During an alert your contacts follow you on a map as you move, along with the path you've taken. With the
              wearable, a contact you've allowed can also ask it for its position at any time.
            </p>
          </Row>

          <Row
            photo="/img/campus-walk.jpg"
            alt="Students walking across a campus"
            kicker="Journeys and safe zones"
            title="For the trip home, every day."
          >
            <p>
              Plan a route before you leave, the way you would on a maps app, or record one you take often. If you
              leave it for 45 seconds, or don't arrive when expected, your contacts are told. Come back to the route
              and the alert closes by itself.
            </p>
            <p>
              Mark places such as home and university as safe zones, and contacts get a quiet notice when you arrive
              or leave.
            </p>
          </Row>

          <Row
            flip
            photo="/img/call.jpg"
            alt="A woman smiling while talking on the phone"
            kicker="Trusted contacts"
            title="You decide who knows, and how much."
          >
            <p>
              Invite family and friends with a link. You set the order they're alerted in and what each person may
              see: your location, your journeys, your safe zones. An SOS always reaches everyone.
            </p>
          </Row>
        </div>
      </section>

      <section id="device" className="tint">
        <div className="wrap">
          <div className="row">
            <div className="device-art">
              <DeviceDrawing />
            </div>
            <div>
              <p className="kicker">The device</p>
              <h2>Works when your phone can't.</h2>
              <p>
                A dead battery, a locked screen, a phone that's been taken or is out of reach. The SafeTag wearable has
                its own mobile connection and its own GPS, and sits on a key ring or a bag zip.
              </p>
              <p className="status">In development. The app does the same job using your phone today.</p>
              <ul className="spec">
                {SPECS.map(([part, what]) => (
                  <li key={part}>
                    <b>{part}</b>
                    <span>{what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="band">
        <div className="wrap">
          <p className="kicker" style={{ color: '#8b92a0' }}>
            Get the app
          </p>
          <h2>Try the test build.</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            SafeTag isn't on the Play Store yet, so Android asks for one extra permission the first time you install
            it.
          </p>
          <DownloadButtons />
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="kicker">Installing</p>
          <h2>Four steps on your Android phone.</h2>
          <Steps items={INSTALL} />
        </div>
      </section>

      <section className="tint">
        <div className="wrap narrow faq">
          <p className="kicker">Questions</p>
          <h2 style={{ marginBottom: 28 }}>Good to know before you try it.</h2>
          <Faq items={QUESTIONS} />
        </div>
      </section>
    </>
  );
}
