export default function SectionHead({ title, desc }) {
  return (
    <div className="section-head reveal">
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}
