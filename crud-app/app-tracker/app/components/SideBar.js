import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ArrowLeftOnRectangleIcon,
  ChartPieIcon,
  QueueListIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="h-screen w-1/6 py-4 px-2 border border-r border-gray-300 bg-white">
      <div className="flex flex-nowrap flex-col h-full gap-5 justify-center items-center">
        <div className="flex flex-row mt-5 justify-center items-center gap-1">
          <Image src="/insights.svg" height={40} width={40}></Image>
          <h1 className="text-base font-bold">Insights</h1>
        </div>
        <div className="border-t border-gray-200 border-1 w-full"></div>
        <div className="flex flex-nowrap flex-grow">
          <ul>
            <p className="mt-5 text-xs ml-4 mb-2 text-gray-500"> Main Menu </p>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded active:text-bold"
              >
                <ChartBarSquareIcon className="h-5 w-5 inline-block mr-5"></ChartBarSquareIcon>
                Dashboard
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/tracker"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded"
              >
                <ClipboardDocumentListIcon className="h-5 w-5 inline-block mr-5"></ClipboardDocumentListIcon>
                Tracker
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/goals"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded"
              >
                <QueueListIcon className="h-5 w-5 inline-block mr-5"></QueueListIcon>
                Goals
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href="/metrics"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded"
              >
                <ChartPieIcon className="h-5 w-5 inline-block mr-5"></ChartPieIcon>
                Metrics
              </Link>
            </li>
            <p className="mt-8 text-xs ml-4 mb-2 text-gray-500"> Misc. </p>
            <li className="mb-5">
              <Link
                href="/help"
                className="flex items-center mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded"
              >
                <PencilSquareIcon className="h-5 w-5 inline-block mr-5"></PencilSquareIcon>
                Request
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="flex items-center hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-xs rounded"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 inline-block mr-5"></ArrowLeftOnRectangleIcon>
                Log out
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-gradient-to-b from-blue-100 to-white p-5 justify-center items-center w-48">
          <h2 className="text-blue-800 text-xs text-center font-bold">
            Stuck in your job search?
          </h2>
          <p className="text-gray-700 text-xs text-center mt-1">
            We can help you get started.
          </p>
          <Image
            src="/help.svg"
            className="mt-5 w-auto h-auto"
            alt="Person giving a helping hand."
            width={100}
            height={300}
          ></Image>
          <Link href="/resources">
            <button className="bg-blue-600 hover:bg-blue-500 shadow-lg text-white font-semibold text-xs mt-5 py-2 px-4 rounded">
              Free Resources
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
