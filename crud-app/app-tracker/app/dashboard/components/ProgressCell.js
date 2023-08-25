import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import ProgressChart from "./ProgressChart";

export default function ProgressCell({ category, data }) { 
  return (
   <div className="flex flex-col p-5 bg-white shadow-lg rounded-lg">
      <div className="flex flex-1 flex-row text-sm">
        <div className="flex-1">
          {category}
        </div>
        <div className="w-5 hover:cursor-pointer">
          <EllipsisVerticalIcon></EllipsisVerticalIcon>
        </div>
      </div>
      <ProgressChart category={category} data={data}></ProgressChart>
   </div>
  );
}
