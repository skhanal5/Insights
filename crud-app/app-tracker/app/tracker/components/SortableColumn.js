import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function SortableColumn ({column}) {
    return (
      <button className="flex flex-row justify-items items-center">
        <span>{column}</span>
        <ChevronDownIcon className="ml-2 w-3 h-3"></ChevronDownIcon>
      </button>
    )
}