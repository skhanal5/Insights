import TabView from "./TabView";
import AddTask from "./AddTask";

export default function TaskHeader() {
  return (
    <div className="flex justify-between w-full mt-5">
      <div>
        <TabView></TabView>
      </div>
      <div>
        <AddTask></AddTask>
      </div>
    </div>
  );
}
