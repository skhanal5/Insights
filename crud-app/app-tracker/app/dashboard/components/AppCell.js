import { Squares2X2Icon } from "@heroicons/react/24/outline";

export default function AppCell(){
    return (
        <div className="flex flex-row mt-5">
            <div className="flex flex-row gap-5">
              <div className="flex bg-gray-100 rounded-full h-8 w-8 justify-center items-center">
                <Squares2X2Icon className="text-gray-700 h-6 w-8">
                  {" "}
                </Squares2X2Icon>
              </div>
              <h2 className="ml-1 mt-1"> Task Description </h2>
            </div>
            <div className="flex flex-col ml-20">
                In Progress
            </div>
        </div>

    )
}