import ProgressRow from "./ProgressRow";
export default function ProgressCheck() {

  const taskData = [
    {type: "To-do", data: "40%"},
    {type: "Completed", data: "25%"},
    {type: "In Progress", data: "25%"},
    {type: "Overdue", data: "10"}
  ]

  return (
    <div className="flex flex-1 h-fit">
      <ProgressRow></ProgressRow>
    </div>
  );
}
