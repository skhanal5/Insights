import TaskContainer from "./components/TaskContainer";
import TaskHeader from "./components/TaskHeader";

export default function Goals() {
  return (
    <div className="flex flex-col h-[calc(80vh)]">
        <TaskHeader></TaskHeader>
        <TaskContainer></TaskContainer>
    </div>
  );
}
