export default function TableRows() {
  const headers = [
    "Company",
    "Role",
    "Location",
    "Link",
    "Date",
    "Status",
    "Notes",
  ];

  const applications = [
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
  ];

  return (
    <tbody className="divide-y divide-gray-200">
      {applications.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(headers).map((key, cellIndex) => (
            <td className="p-5 whitespace-nowrap" key={cellIndex}>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
