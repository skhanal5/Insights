import {
  ChartBarSquareIcon,
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  ArrowUturnLeftIcon,
  ChartPieIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="h-screen w-1/6 py-4 px-2 border border-r border-gray-300 bg-white">
      <div className="flex flex-nowrap flex-col justify-center h-full justify-center items-center gap-5">
        <div className="flex items-center mt-5 justify-center">
          <div className="border border-4 rounded bg-blue-600 mr-5 p-0">
            <PaperAirplaneIcon className="text-white h-4 w-6 inline-block"></PaperAirplaneIcon>
          </div>
          <h1 className="text-base font-bold">Insights</h1>
        </div>
        <div class="border-t border-gray-200 border-1 w-full"></div>
        <div className="flex flex-nowrap flex-grow">
          <ul>
            <p className="mt-5 text-xs ml-4 mb-2 text-gray-500"> Main Menu </p>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded active:text-bold"
              >
                <ChartBarSquareIcon className="h-5 w-5 inline-block mr-5"></ChartBarSquareIcon>
                Dashboard
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/tracker"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded"
              >
                <ClipboardDocumentListIcon className="h-5 w-5 inline-block mr-5"></ClipboardDocumentListIcon>
                Tracker
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/goals"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded"
              >
                <QueueListIcon className="h-5 w-5 inline-block mr-5"></QueueListIcon>
                Goals
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/metrics"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded"
              >
                <ChartPieIcon className="h-5 w-5 inline-block mr-5"></ChartPieIcon>
                Metrics
              </Link>
            </li>
            <p className="mt-8 text-xs ml-4 mb-2 text-gray-500"> Misc. </p>
            <li className="mb-5">
              <Link
                href="/help"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded"
              >
                <InformationCircleIcon className="h-5 w-5 inline-block mr-5"></InformationCircleIcon>
                Need help?
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="flex items-center hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded"
              >
                <ArrowUturnLeftIcon className="h-5 w-5 inline-block mr-5"></ArrowUturnLeftIcon>
                Log out
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-gradient-to-b from-blue-100 to-white p-5 justify-center items-center w-48">
          <h2 className="text-blue-800 text-xs text-center font-bold">Stuck in your job search?</h2>
          <p className="text-gray-700 text-xs text-center mt-1">
             We can help you get started.
          </p>
          <Image src="/help.svg" className="mt-5" width={100} height={300} ></Image>
          <button className="bg-blue-600 hover:bg-blue-500 shadow-lg text-white font-semibold text-xs mt-5 py-2 px-4 rounded">
            Free Resources
          </button>
        </div>
      </div>
    </div>
  );
}
