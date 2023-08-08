
export default function CustomTable() {
  const columns = ["hello","hell1"]

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
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
    {
      Company: "Two Sigma",
      Role: "Entry Level SWE",
      Location: "Chicago, IL",
      Link: "google.com",
      Date: "123",
      Status: "Auto rejected",
      Notes: "Resume screened",
    },
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
    <div className="bg-white shadow-lg rounded-lg mt-5 w-screen h-screen p-5">
      hoe
      <table>
        <thead>
          <tr>
            {columns.map((col,colIndex) => {
              <th key={col}>{col}</th>
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
}
