"""Builds the SafeTag website: one shared header and footer wrapped around the
page bodies below, written out as plain .html files next to this script.

    python build.py

Edit the text in this file, run it, then commit and push. Vercel serves the
generated files as they are (there is no build step on the server).

The contact form is sent by Web3Forms to the team's inbox (see site.js).
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).parent
UPDATED = "12 October 2026"

NAV = [("index.html", "Home"), ("pricing.html", "Pricing"), ("about.html", "About us"),
       ("contact.html", "Contact")]

ANDROID_ICON = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
                'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
                '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>')

DOWNLOAD_BUTTONS = f"""<div class="actions">
  <a class="button" href="SafeTag.apk" download>{ANDROID_ICON}<span><small>Download for</small>Android</span></a>
  <span class="button unavailable" role="img" aria-label="iOS version in development"><span><small>In development</small>iPhone (iOS)</span></span>
</div>
<p class="small" data-build style="margin-top:14px">Android 6 or newer. About 24 MB.</p>"""

# A plain line drawing of the wearable (the hardware is still being built, so
# there is no photograph of it yet).
DEVICE_SVG = """<svg viewBox="0 0 240 300" role="img" aria-label="Drawing of the SafeTag wearable: a round tag with one large button, on a key ring">
  <g fill="none" stroke="#16181d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="120" cy="34" r="20"/>
    <path d="M110 52v14h20V52"/>
    <circle cx="120" cy="170" r="104"/>
    <circle cx="120" cy="170" r="62"/>
    <circle cx="120" cy="170" r="50" fill="#c62828" stroke="#16181d"/>
    <path d="M62 112l5-5M72 102l5-5M82 93l5-5" stroke-width="4"/>
    <circle cx="120" cy="252" r="4" fill="#16181d"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="12" fill="#6b7280">
    <path d="M150 130l34-62" stroke="#6b7280" stroke-width="1"/><text x="160" y="60">SOS button</text>
    <path d="M70 100L30 76" stroke="#6b7280" stroke-width="1"/><text x="4" y="68">Microphone</text>
    <path d="M126 254l44 26" stroke="#6b7280" stroke-width="1"/><text x="174" y="290">Status light</text>
  </g>
</svg>"""


def page(filename: str, title: str, description: str, body: str) -> None:
    def link(href: str, label: str) -> str:
        current = ' aria-current="page"' if href == filename else ""
        return f'<a href="{href}"{current}>{label}</a>'

    nav = "\n      ".join(link(h, l) for h, l in NAV)
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<meta name="theme-color" content="#fbfaf7">
<link rel="icon" href="favicon.png">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="img/hero.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<header class="site-header">
  <div class="wrap">
    <a class="logo" href="index.html"><img src="icon.png" alt="" width="30" height="30">SafeTag</a>
    <nav class="nav" aria-label="Main">
      {nav}
      <a class="button" href="index.html#download">Get the app</a>
    </nav>
    <details class="menu">
      <summary>Menu</summary>
      <nav class="menu-list" aria-label="Main">
        {nav}
        <a href="index.html#download">Get the app</a>
      </nav>
    </details>
  </div>
</header>

<main>
{body}
</main>

<footer class="site-footer">
  <div class="wrap">
    <div class="cols">
      <div>
        <a class="logo" href="index.html"><img src="icon.png" alt="" width="30" height="30">SafeTag</a>
        <p>A wearable and an app that send an SOS and your live location to the people you trust.</p>
      </div>
      <div>
        <h4>Product</h4>
        <ul>
          <li><a href="index.html#how">How it works</a></li>
          <li><a href="index.html#device">The device</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="index.html#download">Download</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About us</a></li>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="privacy.html">Privacy policy</a></li>
          <li><a href="terms.html">Terms and conditions</a></li>
        </ul>
      </div>
    </div>
    <div class="legal">
      <span>&copy; 2026 SafeTag. A final-year engineering project.</span>
      <span>SafeTag is not an emergency service.</span>
      <span>Photographs from Pexels.</span>
    </div>
  </div>
</footer>

<script src="site.js"></script>
</body>
</html>
"""
    (ROOT / filename).write_text(html, encoding="utf-8", newline="\n")


# ─── Home ─────────────────────────────────────────────────────────────────────
page("index.html", "SafeTag: help, one press away",
     "SafeTag is a small wearable and an app. One press sends an SOS and your live location to the people you trust.",
     f"""
<section class="hero">
  <div class="wrap">
    <div>
      <p class="kicker">Personal safety, wearable and app</p>
      <h1>Help, <em>one press</em> away.</h1>
      <p class="lead">SafeTag sends an SOS and your live location to the people you trust. No unlocking your phone, no typing, no explaining where you are.</p>
      {DOWNLOAD_BUTTONS}
    </div>
    <figure>
      <img src="img/hero.jpg" alt="A woman standing outdoors, looking at her phone" width="1400" height="933">
    </figure>
  </div>
</section>

<section style="padding-top:0;border-top:0">
  <div class="wrap">
    <div class="numbers">
      <div><b>1 press</b><span>to call for help</span></div>
      <div><b>3 seconds</b><span>hold for a silent SOS</span></div>
      <div><b>45 seconds</b><span>off your route before contacts are told</span></div>
      <div><b>25 metres</b><span>the tightest route alert zone</span></div>
    </div>
  </div>
</section>

<section id="how" class="tint">
  <div class="wrap">
    <p class="kicker">How it works</p>
    <h2>From one press to people on their way.</h2>
    <ol class="steps">
      <li><h3>You press</h3><p>On the SafeTag wearable, or the SOS button in the app. Press twice for an alarm, or hold for a silent alert.</p></li>
      <li><h3>SafeTag sends</h3><p>The alert and your position reach our server over the mobile network in about two seconds.</p></li>
      <li><h3>Contacts are alerted</h3><p>Their phones ring like a call and open a live map of where you are.</p></li>
      <li><h3>It keeps trying</h3><p>If the first person doesn't respond, the next person in your list is alerted, and so on.</p></li>
    </ol>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="row">
      <div class="row-photo"><img src="img/night.jpg" alt="A person walking alone down a lit street at night" width="1200" height="800" loading="lazy"></div>
      <div>
        <p class="kicker">SOS</p>
        <h2>Loud when you want attention. Silent when you don't.</h2>
        <p>Some situations call for noise. Others get worse if anyone notices you asking for help. SafeTag has one button and two ways to press it.</p>
        <ul>
          <li><strong>Press twice</strong> for an alarm that draws attention, plus the alert to your contacts.</li>
          <li><strong>Hold for three seconds</strong> for a silent alert. No sound, no light.</li>
          <li><strong>Cancel it yourself</strong> the moment you're safe.</li>
        </ul>
      </div>
    </div>

    <div class="row flip">
      <div class="row-photo"><img src="img/map.jpg" alt="A hand holding a phone that shows a map" width="1200" height="800" loading="lazy"></div>
      <div>
        <p class="kicker">Live location</p>
        <h2>They see where you are, not where you were.</h2>
        <p>During an alert your contacts follow you on a map as you move, along with the path you've taken. With the wearable, a contact you've allowed can also ask it for its position at any time.</p>
      </div>
    </div>

    <div class="row">
      <div class="row-photo"><img src="img/campus-walk.jpg" alt="Students walking across a campus" width="1200" height="800" loading="lazy"></div>
      <div>
        <p class="kicker">Journeys and safe zones</p>
        <h2>For the trip home, every day.</h2>
        <p>Plan a route before you leave, the way you would on a maps app, or record one you take often. If you leave it for 45 seconds, or don't arrive when expected, your contacts are told. Come back to the route and the alert closes by itself.</p>
        <p>Mark places such as home and university as safe zones, and contacts get a quiet notice when you arrive or leave.</p>
      </div>
    </div>

    <div class="row flip">
      <div class="row-photo"><img src="img/call.jpg" alt="A woman smiling while talking on the phone" width="1200" height="800" loading="lazy"></div>
      <div>
        <p class="kicker">Trusted contacts</p>
        <h2>You decide who knows, and how much.</h2>
        <p>Invite family and friends with a link. You set the order they're alerted in and what each person may see: your location, your journeys, your safe zones. An SOS always reaches everyone.</p>
      </div>
    </div>
  </div>
</section>

<section id="device" class="tint">
  <div class="wrap">
    <div class="row">
      <div class="device-art">{DEVICE_SVG}</div>
      <div>
        <p class="kicker">The device</p>
        <h2>Works when your phone can't.</h2>
        <p>A dead battery, a locked screen, a phone that's been taken or is out of reach. The SafeTag wearable has its own mobile connection and its own GPS, and sits on a key ring or a bag zip.</p>
        <p class="status">In development. The app does the same job using your phone today.</p>
        <ul class="spec">
          <li><b>Own SIM</b><span>Sends alerts, and can call your contacts, with no phone involved.</span></li>
          <li><b>Built-in GPS</b><span>Reports its position every few seconds during an alert or a journey.</span></li>
          <li><b>Microphone</b><span>Your contacts can hear what is happening. There is no speaker, so nobody near you hears them.</span></li>
          <li><b>Buzzer</b><span>A loud alarm for the audible SOS, and a short buzz if you drift off your route.</span></li>
          <li><b>One button</b><span>Large enough to find by feel in a pocket.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="download" class="band">
  <div class="wrap">
    <p class="kicker" style="color:#8b92a0">Get the app</p>
    <h2>Try the test build.</h2>
    <p class="lead" style="margin-top:14px">SafeTag isn't on the Play Store yet, so Android asks for one extra permission the first time you install it.</p>
    {DOWNLOAD_BUTTONS}
  </div>
</section>

<section>
  <div class="wrap">
    <p class="kicker">Installing</p>
    <h2>Four steps on your Android phone.</h2>
    <ol class="steps">
      <li><h3>Download</h3><p>Tap the Android button. If your browser warns about the file, choose "Download anyway".</p></li>
      <li><h3>Open the file</h3><p>Tap the download notification, or find SafeTag.apk in your Downloads folder.</p></li>
      <li><h3>Allow the install</h3><p>Android will ask you to allow installs from your browser. Switch it on, go back, and tap Install.</p></li>
      <li><h3>Sign up</h3><p>Create an account, allow location and notifications, then invite a trusted contact.</p></li>
    </ol>
  </div>
</section>

<section class="tint">
  <div class="wrap narrow faq">
    <p class="kicker">Questions</p>
    <h2 style="margin-bottom:28px">Good to know before you try it.</h2>
    <details><summary>Do I need the wearable to use SafeTag?</summary><p>No. The app turns your phone into the SafeTag, and nearly everything on this page works that way today. The wearable is for when you can't use your phone.</p></details>
    <details><summary>Is there an iPhone version?</summary><p>Not yet. The iPhone app is in development. For now SafeTag is for Android.</p></details>
    <details><summary>Who can see my location?</summary><p>Only the trusted contacts you add, and only what you allow each of them. During an SOS every contact can see where you are.</p></details>
    <details><summary>Should I rely on this in a real emergency?</summary><p>Not as your only way to get help. SafeTag is a student project in testing. Use it alongside calling your local emergency services, not in place of them.</p></details>
    <details><summary>Will my account be kept?</summary><p>We reset the test server from time to time, so you may need to sign up again. Installing a newer version over the old one keeps your account.</p></details>
  </div>
</section>
""")

# ─── Pricing ──────────────────────────────────────────────────────────────────
page("pricing.html", "Pricing | SafeTag",
     "The SafeTag app is free. Planned prices for the SafeTag wearable and the family pack.",
     """
<div class="page-head">
  <div class="wrap">
    <p class="kicker">Pricing</p>
    <h1>The app is free. The device is coming.</h1>
    <p class="lead">These are the prices we are planning for launch. They may change before the wearable goes on sale, and nothing is being sold yet.</p>
  </div>
</div>

<section>
  <div class="wrap">
    <div class="plans">
      <div class="plan">
        <p class="when">Available now</p>
        <h3>SafeTag App</h3>
        <p class="price">Free</p>
        <p class="small">Your phone acts as the SafeTag.</p>
        <ul>
          <li>SOS, loud and silent</li>
          <li>Live location for your contacts</li>
          <li>Journeys and safe zones</li>
          <li>Trusted contacts with permissions</li>
        </ul>
        <a class="button" href="index.html#download">Download</a>
      </div>
      <div class="plan featured">
        <p class="when">Coming soon</p>
        <h3>SafeTag Device</h3>
        <p class="price">Rs 4,999 <small>one time</small></p>
        <p class="small">Plus Rs 299 a month for its mobile connection.</p>
        <ul>
          <li>Everything in the app</li>
          <li>Works without a phone</li>
          <li>Voice call to contacts on SOS</li>
          <li>Key ring and charging cable</li>
        </ul>
        <a class="button outline" href="contact.html?topic=Device">Ask about the device</a>
      </div>
      <div class="plan">
        <p class="when">Coming soon</p>
        <h3>Family Pack</h3>
        <p class="price">Rs 12,999 <small>for three</small></p>
        <p class="small">Plus Rs 749 a month for all three.</p>
        <ul>
          <li>Three SafeTag devices</li>
          <li>One shared family view</li>
          <li>Saves Rs 1,998 on the devices</li>
          <li>Priority support</li>
        </ul>
        <a class="button outline" href="contact.html?topic=Family%20pack">Ask about the pack</a>
      </div>
    </div>
    <p class="small" style="margin-top:16px">Prices are in Pakistani rupees and are placeholders for planning. Pre-orders are not open.</p>
  </div>
</section>

<section class="tint">
  <div class="wrap">
    <p class="kicker">Compare</p>
    <h2>What each one gives you.</h2>
    <div class="table-scroll">
      <table class="compare">
        <thead><tr><th scope="col">Feature</th><th scope="col">App</th><th scope="col">Device</th><th scope="col">Family Pack</th></tr></thead>
        <tbody>
          <tr><td>Audible and silent SOS</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Live location for contacts</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Journeys with off-route alerts</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Safe zone notices</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Works with no phone</td><td class="no">No</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Voice call to contacts</td><td class="no">No</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Contacts can ask for its location</td><td class="no">No</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
          <tr><td>Number of devices</td><td>Your phone</td><td>1</td><td>3</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section>
  <div class="wrap narrow faq">
    <p class="kicker">Pricing questions</p>
    <h2 style="margin-bottom:28px">The details.</h2>
    <details><summary>Why is there a monthly cost for the device?</summary><p>The wearable has its own SIM so it can work without your phone. The monthly amount pays for that mobile connection.</p></details>
    <details><summary>Will the app stay free?</summary><p>That is the plan. The app is how most people will first try SafeTag, and it needs no hardware from us.</p></details>
    <details><summary>When can I buy the device?</summary><p>We don't have a date. The hardware is still being built and tested. Send us a message and we'll tell you when pre-orders open.</p></details>
    <details><summary>Are these prices final?</summary><p>No. They are working figures while the device is in development.</p></details>
  </div>
</section>
""")

# ─── About ────────────────────────────────────────────────────────────────────
def person(name: str, role: str, bio: str) -> str:
    return (f'<div class="person"><div class="photo">Photo</div><h3>{name}</h3>'
            f'<p class="role">{role}</p><p>{bio}</p></div>')


TEAM = "\n".join([
    person("Team Member 1", "App and backend", "A line or two about what they built goes here."),
    person("Team Member 2", "Hardware and firmware", "A line or two about what they built goes here."),
    person("Team Member 3", "Design and testing", "A line or two about what they built goes here."),
    person("Team Member 4", "Research and documentation", "A line or two about what they built goes here."),
])
SUPERVISORS = "\n".join([
    person("Supervisor Name", "Project supervisor", "Title and department go here."),
    person("Co-Supervisor Name", "Co-supervisor", "Title and department go here."),
])

page("about.html", "About us | SafeTag",
     "SafeTag is a final-year engineering project by four students and two supervisors.",
     f"""
<div class="page-head">
  <div class="wrap">
    <p class="kicker">About us</p>
    <h1>We're building the button we wish everyone had.</h1>
    <p class="lead">SafeTag is a final-year engineering project. Four students and two supervisors, working on one problem: asking for help should take one press, not a phone call.</p>
  </div>
</div>

<section>
  <div class="wrap">
    <div class="wide-photo"><img src="img/campus.jpg" alt="Students on the steps of a university building" width="1400" height="600"></div>
    <div class="two-col" style="margin-top:56px">
      <div>
        <h2>Why we started</h2>
      </div>
      <div>
        <p>Most safety apps assume you can take out your phone, unlock it, find the app and explain what's wrong. In the moments that matter, you often can't do any of those things.</p>
        <p>We wanted something that works with a single press, that can stay silent when it needs to, and that keeps working when the phone is dead, locked or gone. That became SafeTag: a small wearable with its own connection, and an app that does the same job in the meantime.</p>
      </div>
    </div>
    <div class="two-col" style="margin-top:48px">
      <div>
        <h2>Where we are</h2>
      </div>
      <div>
        <p>The app works today. It sends loud and silent SOS alerts, shares live location, follows planned journeys and watches safe zones. The server that receives alerts from the wearable is running and tested.</p>
        <p>The wearable itself is still being built. Until it's ready, your phone plays its part.</p>
      </div>
    </div>
  </div>
</section>

<section class="tint">
  <div class="wrap">
    <p class="kicker">The team</p>
    <h2>Who is building it.</h2>
    <div class="people">
{TEAM}
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <p class="kicker">Supervisors</p>
    <h2>Who is guiding it.</h2>
    <div class="people two">
{SUPERVISORS}
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <h2>Want to help us test it?</h2>
    <p class="lead" style="margin-top:14px">Install the app, try to break it, and tell us what happened.</p>
    <div class="actions">
      <a class="button" href="index.html#download">Get the app</a>
      <a class="button unavailable" style="color:#c9ced8;cursor:pointer" href="contact.html">Contact us</a>
    </div>
  </div>
</section>
""")

# ─── Contact ──────────────────────────────────────────────────────────────────
page("contact.html", "Contact us | SafeTag",
     "Send the SafeTag team a message: feedback on the test build, a bug, or a question about the device.",
     """
<div class="page-head">
  <div class="wrap">
    <p class="kicker">Contact us</p>
    <h1>Tell us what you found.</h1>
    <p class="lead">Feedback on the test build, a bug, a question about the device: it all helps. We read every message.</p>
  </div>
</div>

<section>
  <div class="wrap">
    <div class="two-col">
      <form id="contact-form" novalidate>
        <div>
          <label for="name">Your name</label>
          <input id="name" name="name" autocomplete="name" required maxlength="120">
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required maxlength="200">
        </div>
        <div>
          <label for="topic">What is it about?</label>
          <select id="topic" name="topic">
            <option>General</option>
            <option>Bug in the app</option>
            <option>Feedback</option>
            <option>Device</option>
            <option>Family pack</option>
            <option>Privacy</option>
          </select>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" required minlength="5" maxlength="4000"></textarea>
        </div>
        <div class="hp" aria-hidden="true">
          <label for="website">Leave this empty</label>
          <input id="website" name="website" tabindex="-1" autocomplete="off">
        </div>
        <p class="form-note" id="form-note" role="status"></p>
        <div><button class="button" type="submit">Send message</button></div>
      </form>

      <div class="aside">
        <h3>In an emergency</h3>
        <p>Don't use this form. Call your local emergency services. SafeTag is a test build and this inbox is not watched around the clock.</p>
        <h3>Reporting a bug</h3>
        <p>Tell us what you did, what you expected, and what happened. Your phone model and the time it happened help us find it.</p>
        <h3>When we reply</h3>
        <p>We're students, so replies can take a few days, especially around exams.</p>
        <h3>Your details</h3>
        <p>We use your name and email only to answer you. See the <a href="privacy.html">privacy policy</a>.</p>
      </div>
    </div>
  </div>
</section>
""")

# ─── Privacy ──────────────────────────────────────────────────────────────────
page("privacy.html", "Privacy policy | SafeTag",
     "What the SafeTag app and website collect, why, who can see it, and how to have it removed.",
     f"""
<div class="page-head">
  <div class="wrap narrow">
    <p class="kicker">Legal</p>
    <h1>Privacy policy</h1>
    <p class="lead">SafeTag handles some of the most personal information there is: where you are, and who you trust. This page says plainly what we collect and what we do with it.</p>
  </div>
</div>

<section>
  <div class="wrap narrow prose">
    <p class="updated">Last updated {UPDATED}. This policy covers the SafeTag test build and this website.</p>

    <h2>The short version</h2>
    <ul>
      <li>We collect what SafeTag needs to work: your account details, your location while you use safety features, and the contacts you choose.</li>
      <li>Your location is shown only to the trusted contacts you add, within the permissions you give them.</li>
      <li>We don't sell your information and we don't show adverts.</li>
      <li>This is a student project in testing. Don't put anything into it you couldn't afford to lose.</li>
    </ul>

    <h2>What we collect</h2>
    <h3>Account</h3>
    <p>Your name, email address, phone number and password (stored in encrypted form by our sign-in provider). A profile photo if you add one.</p>
    <h3>Location</h3>
    <p>Your position while an SOS is active or a journey is running, and the path you travelled during it. With a SafeTag wearable, its position is also reported every few minutes when nothing is happening. Routes and safe zones you save are stored too.</p>
    <h3>Trusted contacts</h3>
    <p>The names, phone numbers and email addresses of the people you add as contacts, the order they should be alerted in, and what you allow each to see.</p>
    <h3>Alerts and journeys</h3>
    <p>A record of each alert and journey: when it started and ended, how it ended, and which contacts were notified and responded.</p>
    <h3>Device information</h3>
    <p>For a SafeTag wearable: battery level, signal strength and software version. For your phone: a notification token so we can send you alerts.</p>
    <h3>This website</h3>
    <p>If you use the contact form, your name, email address and message are emailed to us. The site itself sets no tracking cookies.</p>

    <h2>Why we use it</h2>
    <ul>
      <li>To send your alerts and location to your trusted contacts.</li>
      <li>To tell contacts when you start a journey, leave your route, or arrive.</li>
      <li>To show you and your contacts a history of past alerts and journeys.</li>
      <li>To find and fix problems in the test build.</li>
      <li>To answer messages you send us.</li>
    </ul>

    <h2>Who can see your information</h2>
    <p><strong>Your trusted contacts.</strong> Each sees only what you allow: live location, journeys and safe zones are separate permissions. During an SOS, every contact can see your location until the alert ends.</p>
    <p><strong>The SafeTag team.</strong> Team members can access the database to run and debug the service.</p>
    <p><strong>Services we rely on.</strong> SafeTag is built on other companies' services, which process data for us:</p>
    <ul>
      <li>Supabase stores the database and handles sign-in. Our data is held in its Tokyo region.</li>
      <li>Railway runs the server that receives messages from the wearable.</li>
      <li>Google Firebase delivers notifications to phones.</li>
      <li>Google Maps provides the maps, place search and route planning.</li>
      <li>Vercel hosts this website, and Web3Forms delivers contact form messages to our inbox.</li>
    </ul>
    <p>We don't sell your information or share it with advertisers.</p>

    <h2>How long we keep it</h2>
    <p>While your account exists. Because this is a test build, we also reset the test server from time to time, which deletes all accounts and their data.</p>

    <h2>Your choices</h2>
    <ul>
      <li>You can change what each contact may see, or remove a contact, at any time in the app.</li>
      <li>You can turn off location sharing in the app's settings. Safety features that depend on it will stop working.</li>
      <li>To see the data we hold about you, or to have your account and data deleted, <a href="contact.html?topic=Privacy">send us a message</a>.</li>
    </ul>

    <h2>Other people's details</h2>
    <p>When you add a trusted contact you give us their name, number and email. Please make sure they know. They receive alerts about you only after they sign up themselves.</p>

    <h2>Security</h2>
    <p>Connections between the app and our servers are encrypted, and the database enforces who may read what. The wearable's connection to our server is not yet encrypted in the test build. No system is perfectly secure, and a test build is less mature than a finished product.</p>

    <h2>Children</h2>
    <p>SafeTag is not intended for children to sign up to on their own. A parent or guardian should set it up with them.</p>

    <h2>Changes</h2>
    <p>If we change this policy we will update the date at the top of this page.</p>

    <h2>Contact</h2>
    <p>Questions about privacy: <a href="contact.html?topic=Privacy">contact us</a>.</p>
  </div>
</section>
""")

# ─── Terms ────────────────────────────────────────────────────────────────────
page("terms.html", "Terms and conditions | SafeTag",
     "The terms for using the SafeTag test build and website.",
     f"""
<div class="page-head">
  <div class="wrap narrow">
    <p class="kicker">Legal</p>
    <h1>Terms and conditions</h1>
    <p class="lead">The rules for using the SafeTag test build and this website. Please read the part about emergencies.</p>
  </div>
</div>

<section>
  <div class="wrap narrow prose">
    <p class="updated">Last updated {UPDATED}.</p>

    <h2>1. What SafeTag is</h2>
    <p>SafeTag is a final-year engineering project: an Android app, a server, and a wearable device that is still in development. What you can download from this site is a test build, shared so that friends, classmates and other volunteers can try it and tell us what they find.</p>

    <h2>2. SafeTag is not an emergency service</h2>
    <p>SafeTag sends alerts to people you have chosen. It does not contact the police, an ambulance or any other emergency service. Alerts can be delayed or fail to arrive, for example when there is no mobile signal, no internet connection, a flat battery, or a fault in the software.</p>
    <p><strong>Do not rely on SafeTag as your only way of getting help. In an emergency, call your local emergency services.</strong></p>

    <h2>3. Using the test build</h2>
    <ul>
      <li>The test build is provided as it is, without any promise that it will work, be available, or be free of faults.</li>
      <li>We may change it, take it offline, or delete all test data at any time, without notice.</li>
      <li>Location is only as accurate as your phone's or the wearable's GPS, which can be wrong by tens of metres or more, especially indoors.</li>
    </ul>

    <h2>4. Your account</h2>
    <p>Give accurate details when you sign up, keep your password to yourself, and tell us if you think someone else has used your account. You are responsible for what happens under your account.</p>

    <h2>5. Trusted contacts and consent</h2>
    <p>Only add people as trusted contacts with their agreement. Only watch another person's location with their knowledge and permission. Using SafeTag to track or monitor someone without their consent is not allowed, and we will remove accounts that do it.</p>

    <h2>6. Acceptable use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>send false alerts on purpose, or use SafeTag to harass or alarm anyone;</li>
      <li>try to access other people's accounts or data;</li>
      <li>interfere with the service, or attempt to overload it;</li>
      <li>use SafeTag for anything unlawful.</li>
    </ul>

    <h2>7. The device and prices</h2>
    <p>The wearable is not on sale. Descriptions of it on this site describe what we are building and may change. Prices shown are planning figures, not offers, and no order can be placed.</p>

    <h2>8. Your information</h2>
    <p>How we handle your information is set out in the <a href="privacy.html">privacy policy</a>, which forms part of these terms.</p>

    <h2>9. Our responsibility</h2>
    <p>SafeTag is made by students as an academic project and offered free of charge. To the extent the law allows, the SafeTag team is not liable for loss or harm arising from use of the test build, including an alert that is delayed, misdirected or not delivered.</p>

    <h2>10. Ending use</h2>
    <p>You can stop using SafeTag at any time by uninstalling the app, and you can ask us to delete your account. We may suspend or remove an account that breaks these terms.</p>

    <h2>11. Changes to these terms</h2>
    <p>We may update these terms as the project develops. The date at the top of the page shows when they last changed.</p>

    <h2>12. Governing law</h2>
    <p>These terms are governed by the laws of Pakistan.</p>

    <h2>13. Contact</h2>
    <p>Questions about these terms: <a href="contact.html">contact us</a>.</p>
  </div>
</section>
""")

print("built:", ", ".join(sorted(p.name for p in ROOT.glob("*.html"))))
