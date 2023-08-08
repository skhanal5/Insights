import TableUtilities from "./components/TableUtilities";
import Table from "./components/Table";

export default function Tracker() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TableUtilities></TableUtilities>
      <Table></Table>
    </div>
  );
}
