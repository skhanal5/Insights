import Tools from "./components/Tools";
import Table from "./components/Table";

export default function Tracker() {
  return (
    <div className="flex flex-col h-[calc(80vh)]">
      <Tools></Tools>
      <Table></Table>
    </div>
  );
}
