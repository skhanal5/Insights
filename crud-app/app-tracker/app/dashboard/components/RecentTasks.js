import TaskRow from "./TaskRow";
export default function RecentTasks() {
  return (
    <div className="flex-1 flex">
      <div className="flex flex-row w-fit h-full gap-10">
        <div className="bg-white shadow-lg rounded-lg w-fit p-5">
          <h3 className="font-bold text-sm"> Recent Tasks </h3>
          <div className="divide-y mt-5">
            <TaskRow></TaskRow>
            <TaskRow></TaskRow>
            <TaskRow></TaskRow>
            <TaskRow></TaskRow>
          </div>
        </div>
      </div>
    </div>
  );
}
