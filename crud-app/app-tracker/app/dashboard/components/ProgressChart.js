export default function ProgressChart({ category, data }) {
  let bgColor = "";

  if (category == "To-do") {
    bgColor = "bg-blue-500";
  } else if (category == "In Progress") {
    bgColor = "bg-orange-500";
  } else if (category == "Completed") {
    bgColor = "bg-green-500";
  } else if (category == "Overdue") {
    bgColor = "bg-red-500";
  }

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex-1 text-xs mb-2">Progress</div>
        <div className="text-xs">{data}%</div>
      </div>
    </div>
  );
}
