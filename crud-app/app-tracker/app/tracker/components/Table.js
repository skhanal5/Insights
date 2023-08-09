import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

export default function Table() {

  return (
    <div className="h-[calc(90vh)] bg-white shadow-lg rounded-lg mt-5 p-5 overflow-y-auto">
      <table className="table-auto">
        <TableHeader></TableHeader>
        <TableRows></TableRows>
      </table>
    </div>
  );
}
