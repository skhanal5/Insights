import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
    return (
        <div className="flex flex-row p-2 rounded-lg shadow-lg bg-white w-3/12 justify-left items-center">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 text-bold"></MagnifyingGlassIcon>
            <input type="text" className="ml-2 outline-none placeholder:text-sm w-full focus:outline-none" placeholder="Search role/company" ></input>
        </div>
    )
}