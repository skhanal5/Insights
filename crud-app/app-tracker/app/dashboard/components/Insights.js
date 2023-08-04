import {
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default function Insights() {
  return (
    <div className="flex flex-row justify-center items-center gap-10 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/5">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <ClipboardDocumentCheckIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ClipboardDocumentCheckIcon>
          </div>
          <div>
            <p className="text-xs"> Applications</p>
            <p className="font-bold text-lg"> 50 </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/5">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <EnvelopeOpenIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></EnvelopeOpenIcon>
          </div>
          <div>
            <p className="text-xs">Interviews </p>
            <p className="font-bold text-lg"> 3 </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/5">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <ArrowTrendingUpIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ArrowTrendingUpIcon>
          </div>
          <div>
            <p className="text-xs"> Callback Rate </p>
            <p className="font-bold text-lg"> 5% </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/5">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <ArrowTrendingDownIcon className="text-blue-700 h-3/5 w-3/5 w-inline-block"></ArrowTrendingDownIcon>
          </div>
          <div>
            <p className="text-xs"> Failure Rate</p>
            <p className="font-bold text-lg"> 70% </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/5">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
            <ChatBubbleLeftEllipsisIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ChatBubbleLeftEllipsisIcon>
          </div>
          <div>
            <p className="text-xs"> Total Offers </p>
            <p className="font-bold text-lg"> 10 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
