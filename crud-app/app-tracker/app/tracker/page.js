import Utilities from "./components/Utilities";
import Table from "./components/Table";

export default function Tracker() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Utilities></Utilities>
      <Table></Table>
    </div>
  );
}
