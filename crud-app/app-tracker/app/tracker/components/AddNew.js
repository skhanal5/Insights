import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
export default function AddNew() {
  return (
    <div>
      <button className="p-3 flex justify-center items-center h-full bg-white hover:bg-gray-200 shadow-lg text-gray-400 text-sm w-full rounded">
        Add New
        <span>
          <PlusIcon className="h-4 w-4 ml-2 text-gray-400"></PlusIcon>
        </span>
      </button>
    </div>
  );
}
