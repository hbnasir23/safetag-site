/** The title block at the top of every page except Home. */
export default function PageHead({ kicker, title, children, narrow = false }) {
  return (
    <div className="page-head">
      <div className={narrow ? 'wrap narrow' : 'wrap'}>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lead">{children}</p>
      </div>
    </div>
  );
}
