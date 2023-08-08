import TableUtilities from "./components/TableUtilities";
import CustomTable from "./components/CustomTable";

export default function Tracker() {
  return (
    <div className="flex flex-col">
      <TableUtilities></TableUtilities>
      <CustomTable></CustomTable>
    </div>
  );
}
