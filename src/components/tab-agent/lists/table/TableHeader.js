export function TableHeader({ headers }) {
  return (
    <thead className="custom-table-header w-100">
      <tr className="row-cols-auto w-100">
        {headers.map((header) => (
          <th key={header} className="col">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
