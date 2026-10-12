/** Questions that open to show their answer. `items` is [{ q, a }]. */
export default function Faq({ items }) {
  return (
    <>
      {items.map(({ q, a }) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </>
  );
}
