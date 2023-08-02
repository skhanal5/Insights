import TaskRow from "./TaskRow";
export default function RecentTasks() {
  return (
    <div className="flex flex-row w-fit gap-10">
      <div className="flex flex-col">
        <div className="bg-white shadow-lg rounded-lg mt-5 w-fit p-5">
          <h3 className="font-bold font-blue-700"> Recent Tasks </h3>
          <div className="divide-y">
            <TaskRow></TaskRow>
            <TaskRow></TaskRow>
            <TaskRow></TaskRow>
          </div>
        </div>
      </div>
    </div>
  );
}
