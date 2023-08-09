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
      Date: "08/01/2023",
      Status: "Auto Rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Amazon",
      Role: "Software Development Engineer L4",
      Location: "Seattle, WA",
      Link: "google.com",
      Date:  "07/05/2023",
      Status: "Offer",
      Notes: "2 Question OA, 1 Virtual Onsite",
    },
    {
      Company: "Two Sigma",
      Role: "Quant Developer",
      Location: "Chicago, IL",
      Link: "google.com",
      Date:  "07/30/2023",
      Status: "Phone Screen",
      Notes: "C++ Heavy",
    },
    {
      Company: "NSA",
      Role: "Early Career SWE",
      Location: "Fort Meade, MD",
      Link: "google.com",
      Date: "08/02/2023",
      Status: "Ghosted",
      Notes: "Security Clearance Required",
    },
    {
      Company: "Apple",
      Role: "SWE - MapKit",
      Location: "Mountain View, CA",
      Link: "google.com",
      Date: "06/30/2023",
      Status: "Rejected",
      Notes: "Failed Technical Interview",
    },
    {
      Company: "Apple",
      Role: "SWE - WatchOS",
      Location: "Mountain View, CA",
      Link: "google.com",
      Date: "06/30/2023",
      Status: "Interview",
      Notes: "Headhunter inquired",
    }
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
                  className="p-5 text-sm whitespace-nowrap text-center"
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
