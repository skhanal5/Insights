import RecentTasks from "./RecentTasks";
import Reminder from "./Reminder";
import Insights from "./Insights";
import Overview from "./Overview";
import Calendar from "./Calendar";

export default function MainPanel() {
  return (
    <div>
      <Insights></Insights>
      <div className="flex flex-row gap-10">
        <Overview></Overview>
        <Calendar></Calendar>
      </div>
      <div className="flex flex-row h-fit gap-10 mt-5">
        <RecentTasks></RecentTasks>
        <Reminder></Reminder>
      </div>
    </div>
  );
}
