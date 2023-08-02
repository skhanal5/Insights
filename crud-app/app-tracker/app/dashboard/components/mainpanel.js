import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import AppCell from "./appcell";

export default function MainPanel() {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex flex-col ml-10 mr-10 mt-10">
        <div>
          <div>
            <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
            <p className="mt-1 text-sm font-light font-gray-100">
              {" "}
              Here are some fast insights for your job search.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
            <div className="flex flex-row gap-5">
              <div className="bg-blue-100 rounded-full w-6">
                <ClipboardDocumentCheckIcon className="text-blue-700 h-4 w-6 inline-block">
                  {" "}
                </ClipboardDocumentCheckIcon>
              </div>
              <h2> Applications Sent </h2>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
            <div className="flex flex-row gap-5">
              <div className="bg-blue-100 rounded-full w-6">
                <EnvelopeOpenIcon className="text-blue-700 h-4 w-6 inline-block">
                  {" "}
                </EnvelopeOpenIcon>
              </div>
              <h2>Interview Invitations</h2>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
            <div className="flex flex-row gap-5">
              <div className="bg-blue-100 rounded-full w-6">
                <ArrowTrendingUpIcon className="text-blue-700 h-4 w-6 inline-block">
                  {" "}
                </ArrowTrendingUpIcon>
              </div>
              <h2>Overall Response Rate</h2>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
            <div className="flex flex-row gap-5">
              <div className="bg-blue-100 rounded-full w-6">
                <ChatBubbleLeftEllipsisIcon className="text-blue-700 h-4 w-6 inline-block">
                  {" "}
                </ChatBubbleLeftEllipsisIcon>
              </div>
              <h2>Total Offers</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-fit gap-10">
          <div className="flex flex-col">
            <div className="bg-white shadow-lg rounded-lg mt-10 w-fit p-5">
              <h3 className="font-bold font-blue-700"> Recent Tasks </h3>
              <div>
                <AppCell></AppCell>
                <AppCell></AppCell>
                <AppCell></AppCell>
              </div>
            </div>
          </div>
          <div className="flex flex-row shadow-lg rounded-lg bg-blue-600 mt-10 p-10">
              <div>
                <p className="text-lg font-semibold text-white">
                  Friendly Reminder!
                </p>
                <p className="text-sm font-light text-white mt-5">
                  It has been "X" days since you applied to "Company" on
                  "00/00/0000". Double check your application and update your
                  status!
                </p>
                <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs mt-5 py-2 px-4 rounded">
                  View status
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
