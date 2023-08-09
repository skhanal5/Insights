import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function StatusFilter() {
  return (
    <div>
      <button className="flex p-3 justify-center items-center bg-white hover:bg-gray-100 shadow-lg text-gray-500 text-sm rounded">
        Status
        <span>
          <ChevronDownIcon className="h-4 w-4 ml-2 text-gray-500"></ChevronDownIcon>
        </span>
      </button>
    </div>
  );
}
