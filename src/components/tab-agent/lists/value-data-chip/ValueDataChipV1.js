export function ValueDataChipV1({ value, label }) {
  return (
    <div className="value-data-chip-v1">
      <p className="value-data-chip-v1__value">{value}</p>
      <p className="value-data-chip-v1__label">{label}</p>
    </div>
  );
}
