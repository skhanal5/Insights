export default function TableHeader() {
  const headers = [
    "Company",
    "Role",
    "Location",
    "Application Link",
    "Date",
    "Status",
    "Notes",
  ];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <td
            className="p-5 text-xs font-semibold uppercase text-gray-500 border-b"
            key={index}
          >
            {header}
          </td>
        ))}
      </tr>
    </thead>
  );
}
