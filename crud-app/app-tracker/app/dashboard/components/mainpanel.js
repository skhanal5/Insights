import ProgressCheck from "./ProgressCheck";
import Reminder from "./Reminder";
import Insights from "./Insights";
import Overview from "./Overview";
import GoalCompletion from "./GoalCompletion";
import Calendar from "./Calendar";

export default function MainPanel() {
  return (
    <div className="h-[calc(80vh)]">
      <Insights></Insights>
      <div className="flex flex-row h-fit gap-10">
        <Overview></Overview>
        <ProgressCheck></ProgressCheck>
      </div>
      <div className="flex flex-row h-fit gap-10 mt-5">
        <Calendar></Calendar>
        <GoalCompletion></GoalCompletion>
        <Reminder></Reminder>
      </div>
    </div>
  );
}
