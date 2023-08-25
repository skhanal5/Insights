import ProgressCell from "./ProgressCell";
export default function ProgressCheck() {
  const taskData = [
    { type: "To-do", data: "40" },
    { type: "Completed", data: "25" },
    { type: "In Progress", data: "25" },
    { type: "Overdue", data: "10" },
  ];

  return (
    <div className="grid grid-cols-2 mt-5 gap-5 w-1/2">
      {taskData.map((task, taskIndex) => (
        <ProgressCell
          category={task.type}
          data={task.data}
          key={taskIndex}
        ></ProgressCell>
      ))}
    </div>
  );
}
