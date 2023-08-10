import { PlusIcon } from "@heroicons/react/24/outline";
export default function AddTask() {
  return (
    <div>
      <button className="flex p-2 justify-center items-center h-full bg-blue-600 hover:bg-blue-500 shadow-lg text-white text-sm rounded">
        Add Task
        <span>
          <PlusIcon className="h-4 w-4 ml-2"></PlusIcon>
        </span>
      </button>
    </div>
  );
}
