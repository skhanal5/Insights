import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Dot from "./Dot";
export default function TaskRow({task, state}){
    return (
        <div className="flex flex-row p-1">
            <div className="flex flex-row gap-10 items-center">
              <div className="flex bg-gray-100 rounded-full h-6 w-6 justify-center items-center">
                <Squares2X2Icon className="text-gray-700 h-4 w-6">
                </Squares2X2Icon>
              </div>
              <p className="w-72 text-sm">{task}</p>
            </div>
            <div className="flex flex-row flex-nowrap w-full text-sm px-2 gap-5 bg-gray-100 rounded-lg items-center">
                <Dot color="bg-green-600"></Dot>
                <p className="whitespace-nowrap">{state}</p>
            </div>
        </div>

    )
}