export default function TableHeader() {
    const headers = ["Company","Role", "Location", "Link", "Date", "Status", "Notes"]

    return (
        <thead>
        <tr>
          {headers.map((header, index) => (
            <td className="p-5 text-base" key={index}>{header}</td>
          ))}
        </tr>
      </thead> 
    )
}