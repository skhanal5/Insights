import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Dot from "./Dot";
export default function TaskRow(){
    return (
        <div className="flex flex-row p-3">
            <div className="flex flex-row gap-5 items-center">
              <div className="flex bg-gray-100 rounded-full h-8 w-8 justify-center items-center">
                <Squares2X2Icon className="text-gray-700 h-6 w-8">
                  {" "}
                </Squares2X2Icon>
              </div>
              <p className="w-72">This is task number one for this week.</p>
            </div>
            <div className="flex flex-row ml-20 w-52 gap-5 items-center">
                <Dot color="bg-green-600"></Dot>
                In Progress
            </div>
        </div>

    )
}