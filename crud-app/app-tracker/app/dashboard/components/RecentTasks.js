import TaskRow from "./TaskRow";
export default function RecentTasks() {

  const taskData = [
    {description: "Call back John Doe from Lockheed Martin", state: "In Progress"},
    {description: "Get a referral before applying to PayPal", state: "In Progress"},
    {description: "Make a cover letter for Amazon application", state: "In Progress"},
    {description: "Message Mike Jackson about a mock interview", state: "In Progress"}
  ]

  return (
    <div className="flex-1 flex">
      <div className="flex flex-row w-fit h-full gap-10">
        <div className="bg-white shadow-lg rounded-lg w-fit p-5">
          <h3 className="font-semibold text-sm"> Recent Tasks </h3>
          <div className="divide-y mt-5">
            { taskData.map((task, taskIndex) => (
              <TaskRow key={taskIndex} task={task.description} state={task.state}></TaskRow>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
