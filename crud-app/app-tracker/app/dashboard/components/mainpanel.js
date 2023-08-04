import RecentTasks from "./RecentTasks";
import Reminder from "./Reminder";
import Insights from "./Insights";
import TaskRow from "./TaskRow";

export default function MainPanel() {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex flex-col ml-10 mr-10 mt-10">
        <div>
          <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Here are some quick insights for your job search.
          </p>
        </div>
        <Insights></Insights>
        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 w-102 h-72 p-5">
            <h3 className="font-bold font-blue-700"> Overview </h3>
          </div>
        </div>
        <div className="flex flex-row h-64 gap-10 mt-5">
          <RecentTasks></RecentTasks>
          <Reminder></Reminder>
        </div>
      </div>
    </div>
  );
}
