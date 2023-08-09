import SortableColumn from "./SortableColumn";

export default function TableHeader() {
  const headers = ["Company", "Role", "Location", "Date", "Status", "Notes", "Actions"];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          if (header == "Notes" || header == "Actions") {
            return (
              <td className="p-5 text-xs font-semibold uppercase text-gray-500 border-b text-left" key={index}>
                {header}
              </td>
              )
          } else {
            return (
            <td className="p-5 text-xs font-semibold text-gray-500 border-b text-left" key={index}>
              <SortableColumn column={header}></SortableColumn>
            </td>
            )
          }
        })}
      </tr>
    </thead>
  );
}
