import SortableColumn from "./SortableColumn";

export default function TableHeader() {
  const headers = ["Company", "Role", "Location", "Date", "Status", "Notes", "Actions"];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          if (header == "Company") {
            return (
            <td className="p-5 text-xs font-semibold uppercase text-gray-500 border-b" key={index}>
              <SortableColumn column={header}></SortableColumn>
            </td>
            )
          } else if (header == "Role") {
            return (
            <td className="p-5 text-xs font-semibold uppercase text-gray-500 border-b" key={index}>
              <SortableColumn column={header}></SortableColumn>
            </td>
            )
          } else {
            return (
            <td className="p-5 text-xs font-semibold uppercase text-gray-500 border-b" key={index}>
              {header}
            </td>
            )
          }
        })}
      </tr>
    </thead>
  );
}
