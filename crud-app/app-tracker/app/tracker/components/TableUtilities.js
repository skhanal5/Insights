import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function TableUtilities() {
    return (
        <div className="flex flex-row gap-3 justify-center items-center">
            <button>
                <PencilSquareIcon className="w-4 h-4 text-slate-600"></PencilSquareIcon>
            </button>
            <button>
                <TrashIcon className="w-4 h-4 text-red-600">
                </TrashIcon>
            </button>
        </div>
    )
}