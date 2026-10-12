import { Link } from 'react-router-dom';

import Faq from '../components/Faq.jsx';
import PageHead from '../components/PageHead.jsx';
import { COMPARISON, PLANS } from '../content/site.js';
import { usePageTitle } from '../hooks.js';

const QUESTIONS = [
  {
    q: 'Why is there a monthly cost for the device?',
    a: 'The wearable has its own SIM so it can work without your phone. The monthly amount pays for that mobile connection.',
  },
  {
    q: 'Will the app stay free?',
    a: 'That is the plan. The app is how most people will first try SafeTag, and it needs no hardware from us.',
  },
  {
    q: 'When can I buy the device?',
    a: "We don't have a date. The hardware is still being built and tested. Send us a message and we'll tell you when pre-orders open.",
  },
  {
    q: 'Are these prices final?',
    a: 'No. They are working figures while the device is in development.',
  },
];

function Cell({ value }) {
  if (value === true) return <td className="yes">Yes</td>;
  if (value === false) return <td className="no">No</td>;
  return <td>{value}</td>;
}

export default function Pricing() {
  usePageTitle('Pricing | SafeTag');

  return (
    <>
      <PageHead kicker="Pricing" title="The app is free. The device is coming.">
        These are the prices we are planning for launch. They may change before the wearable goes on sale, and nothing
        is being sold yet.
      </PageHead>

      <section>
        <div className="wrap">
          <div className="plans">
            {PLANS.map((plan) => (
              <div key={plan.name} className={plan.featured ? 'plan featured' : 'plan'}>
                <p className="when">{plan.when}</p>
                <h3>{plan.name}</h3>
                <p className="price">
                  {plan.price} {plan.unit && <small>{plan.unit}</small>}
                </p>
                <p className="small">{plan.note}</p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className={plan.action.primary ? 'button' : 'button outline'} to={plan.action.to}>
                  {plan.action.label}
                </Link>
              </div>
            ))}
          </div>
          <p className="small" style={{ marginTop: 16 }}>
            Prices are in Pakistani rupees and are placeholders for planning. Pre-orders are not open.
          </p>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <p className="kicker">Compare</p>
          <h2>What each one gives you.</h2>
          <div className="table-scroll">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">App</th>
                  <th scope="col">Device</th>
                  <th scope="col">Family Pack</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([feature, ...values]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    {values.map((v, i) => (
                      <Cell key={i} value={v} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap narrow faq">
          <p className="kicker">Pricing questions</p>
          <h2 style={{ marginBottom: 28 }}>The details.</h2>
          <Faq items={QUESTIONS} />
        </div>
      </section>
    </>
  );
}
