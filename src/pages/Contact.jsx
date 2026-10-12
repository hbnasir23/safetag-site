import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import PageHead from '../components/PageHead.jsx';
import { CONTACT_ACCESS_KEY } from '../content/site.js';
import { usePageTitle } from '../hooks.js';

const TOPICS = ['General', 'Bug in the app', 'Feedback', 'Device', 'Family pack', 'Privacy'];

/** Emails the message to the team through Web3Forms. Sent as ordinary form
 *  data, a "simple" request, so the browser needs no permission pre-check. */
async function sendMessage({ name, email, topic, message }) {
  const data = new FormData();
  data.append('access_key', CONTACT_ACCESS_KEY);
  data.append('subject', `SafeTag website: ${topic}`);
  data.append('from_name', 'SafeTag website');
  data.append('name', name);
  data.append('email', email);
  data.append('topic', topic);
  data.append('message', message);
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: data,
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error('rejected');
}

export default function Contact() {
  usePageTitle('Contact us | SafeTag');

  // /contact?topic=Device preselects the subject.
  const [params] = useSearchParams();
  const wanted = params.get('topic')?.toLowerCase();
  const initialTopic = TOPICS.find((t) => t.toLowerCase() === wanted) ?? TOPICS[0];

  const [form, setForm] = useState({ name: '', email: '', topic: initialTopic, message: '', website: '' });
  const [note, setNote] = useState(null); // { kind: 'ok' | 'err', text }
  const [sending, setSending] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name) return setNote({ kind: 'err', text: 'Please tell us your name.' });
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return setNote({ kind: 'err', text: 'Please enter a valid email address so we can reply.' });
    }
    if (message.length < 5) return setNote({ kind: 'err', text: 'Please write a message.' });
    // The hidden "website" field is only ever filled in by bots.
    if (form.website) return setNote({ kind: 'ok', text: 'Thank you. Your message has been sent.' });

    setSending(true);
    try {
      await sendMessage({ name, email, topic: form.topic, message });
      setForm((f) => ({ ...f, name: '', email: '', message: '' }));
      setNote({ kind: 'ok', text: 'Thank you. Your message has been sent, and we will reply by email.' });
    } catch {
      setNote({ kind: 'err', text: 'Sorry, the message could not be sent. Please check your connection and try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHead kicker="Contact us" title="Tell us what you found.">
        Feedback on the test build, a bug, a question about the device: it all helps. We read every message.
      </PageHead>

      <section>
        <div className="wrap">
          <div className="two-col">
            <form onSubmit={submit} noValidate>
              <div>
                <label htmlFor="name">Your name</label>
                <input id="name" autoComplete="name" maxLength={120} value={form.name} onChange={set('name')} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" autoComplete="email" maxLength={200} value={form.email} onChange={set('email')} />
              </div>
              <div>
                <label htmlFor="topic">What is it about?</label>
                <select id="topic" value={form.topic} onChange={set('topic')}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" maxLength={4000} value={form.message} onChange={set('message')} />
              </div>
              <div className="hp" aria-hidden="true">
                <label htmlFor="website">Leave this empty</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
              </div>
              {note && (
                <p className={`form-note ${note.kind}`} role="status">
                  {note.text}
                </p>
              )}
              <div>
                <button className="button" type="submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>

            <div className="aside">
              <h3>In an emergency</h3>
              <p>
                Don't use this form. Call your local emergency services. SafeTag is a test build and this inbox is not
                watched around the clock.
              </p>
              <h3>Reporting a bug</h3>
              <p>
                Tell us what you did, what you expected, and what happened. Your phone model and the time it happened
                help us find it.
              </p>
              <h3>When we reply</h3>
              <p>We're students, so replies can take a few days, especially around exams.</p>
              <h3>Your details</h3>
              <p>
                We use your name and email only to answer you. See the <Link to="/privacy">privacy policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
