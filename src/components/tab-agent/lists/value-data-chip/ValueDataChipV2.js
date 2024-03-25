export function ValueDataChipV2({ value, label }) {
  return (
    <div className="value-data-chip-v2">
      <p className="value-data-chip-v2__value">{value}</p>
      <p className="value-data-chip-v2__label">{label}</p>
    </div>
  );
}
