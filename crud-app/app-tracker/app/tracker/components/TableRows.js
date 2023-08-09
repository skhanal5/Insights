import Status from "./Status";
import TableUtilities from "./TableUtilities";

export default function TableRows() {
  const headers = ["Company", "Role", "Location", "Date", "Status", "Notes", "Actions"];

  const applications = [
    {
      Company: "Belvedere Trading Company",
      Role: "SWE - Early Career",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto Rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Amazon",
      Role: "Software Development Engineer L4",
      Location: "Seattle, WA",
      Link: "google.com",
      Date: "123",
      Status: "Offer",
      Notes: "Resume screened",
    },
    {
      Company: "Two Sigma",
      Role: "Quant Developer",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Phone Screen",
      Notes: "Resume screened",
    },
    {
      Company: "NSA",
      Role: "Early Career SWE",
      Location: "Fort Meade, MD",
      Link: "google.com",
      Date: "123",
      Status: "Ghosted",
      Notes: "Resume screened",
    },
    {
      Company: "Apple",
      Role: "Early Career SWE",
      Location: "Mountain View, CA",
      Link: "google.com",
      Date: "123",
      Status: "Rejected",
      Notes: "Resume screened",
    },
  ];

  return (
    <tbody className="mt-1">
      {applications.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(headers).map((key, cellIndex) => {
            if (key == "Status") {
              return (
                <td
                  className="p-5 text-sm whitespace-nowrap text-left"
                  key={cellIndex}
                >
                  {<Status status={row[key]}></Status>}
                </td>
              )
            } else if (key == "Actions") {
              return (
                <td
                  className="p-5 text-sm whitespace-nowrap text-left"
                  key={cellIndex}
                >
                  {<TableUtilities></TableUtilities>}
                </td>
              )
            } else {
              return (
                <td
                  className="p-5 text-sm whitespace-wrap text-left"
                  key={cellIndex}
                >
                  {row[key]}
                </td>
              )
            }
          })}
        </tr>
      ))}
    </tbody>
  );
}
