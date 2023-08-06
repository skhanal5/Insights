import RecentTasks from "./RecentTasks";
import Reminder from "./Reminder";
import Insights from "./Insights";
import Overview from "./Overview";
import MonthlyMetric from "./MonthlyMetric";
import Calendar from "./Calendar";

export default function MainPanel() {
  return (
    <div>
      <Insights></Insights>
      <div className="flex flex-row gap-10">
        <Overview></Overview>
        <MonthlyMetric></MonthlyMetric>
      </div>
      <div className="flex flex-row h-full gap-10 mt-5">
        <RecentTasks></RecentTasks>
        <Calendar></Calendar>
        <Reminder></Reminder>
      </div>
    </div>
  );
}
