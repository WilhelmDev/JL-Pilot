export function ListPageHeader({ title, subtitle }) {
  return (
    <header id="header">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
}
