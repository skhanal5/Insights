import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

export default function Table() {

  return (
    <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
      <table>
        <TableHeader></TableHeader>
        <TableRows></TableRows>
      </table>
    </div>
  );
}
