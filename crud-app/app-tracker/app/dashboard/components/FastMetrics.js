import {
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default function FastMetrics() {
  return (
    <div className="flex flex-row gap-10 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
        <div className="flex flex-row gap-5 ">
          <div className="flex bg-blue-100 rounded-full h-6 w-6 justify-center items-center">
            <ClipboardDocumentCheckIcon className="text-blue-700 h-4 w-6 inline-block"></ClipboardDocumentCheckIcon>
          </div>
          <div>
            <p className="text-xs"> Applications Sent </p>
            <p className="font-bold text-lg"> 50 </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
        <div className="flex flex-row gap-5">
          <div className="bg-blue-100 rounded-full h-6 w-6 justify-center items-center">
            <EnvelopeOpenIcon className="text-blue-700 h-4 w-6 inline-block"></EnvelopeOpenIcon>
          </div>
          <div>
            <p className="text-xs"> Interview Invitations </p>
            <p className="font-bold text-lg"> 3 </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
        <div className="flex flex-row gap-5">
          <div className="bg-blue-100 rounded-full h-6 w-6 justify-center items-center">
            <ArrowTrendingUpIcon className="text-blue-700 h-4 w-6 inline-block"></ArrowTrendingUpIcon>
          </div>
          <div>
            <p className="text-xs"> Callback Rate </p>
            <p className="font-bold text-lg"> 5% </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
        <div className="flex flex-row gap-5">
          <div className="bg-blue-100 rounded-full h-6 w-6 justify-center items-center">
            <ArrowTrendingDownIcon className="text-blue-700 h-4 w-6 inline-block"></ArrowTrendingDownIcon>
          </div>
          <div>
            <p className="text-xs"> Failure Rate</p>
            <p className="font-bold text-lg"> 70% </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
        <div className="flex flex-row gap-5">
          <div className="bg-blue-100 rounded-full h-6 w-6 justify-center items-center">
            <ChatBubbleLeftEllipsisIcon className="text-blue-700 h-4 w-6 inline-block"></ChatBubbleLeftEllipsisIcon>
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
