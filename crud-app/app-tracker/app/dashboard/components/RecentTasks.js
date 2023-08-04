import TaskRow from "./TaskRow";
export default function RecentTasks() {
  return (
    <div className="flex flex-row w-fit h-full gap-10">
      <div className="bg-white shadow-lg rounded-lg w-fit p-5">
        <h3 className="font-bold font-blue-700"> Recent Tasks </h3>
        <div className="divide-y mt-3">
          <TaskRow></TaskRow>
          <TaskRow></TaskRow>
          <TaskRow></TaskRow>
        </div>
      </div>
    </div>
  );
}
