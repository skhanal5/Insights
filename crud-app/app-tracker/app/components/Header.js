"use client";

import { BellIcon, MoonIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Header({ childComponent }) {
  const pathName = usePathname();

  const renderHeader = () => {
    if (pathName == "/dashboard") {
      return (
        <div>
          <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Here are some quick insights for your job search.
          </p>
        </div>
      );
    } else if (pathName == "/tracker") {
      return (
        <div>
          <h2 className="font-bold text-2xl font-blue-700"> Tracker </h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Record, manage, and streamline your job applications.
          </p>
        </div>
      );
    } else if (pathName == "/goals") {
      return (
        <div>
          <h2 className="font-bold text-2xl font-blue-700"> Goals</h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Define and track your desired achievements or objectives.
          </p>
        </div>
      );
    } else if (pathName == "/metrics") {
      return (
        <div>
          <h2 className="font-bold text-2xl font-blue-700"> Metrics </h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Analyze in-depth insights for your progress via visualizations.
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          {renderHeader()}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="rounded-full hover:bg-blue-200 hover:cursor-pointer h-8 w-8 flex justify-center items-center">
              <MoonIcon className="h-3/5 w-3/5 inline-block"></MoonIcon>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="rounded-full hover:bg-blue-200 hover:cursor-pointer h-8 w-8 flex justify-center items-center">
              <BellIcon className="h-3/5 w-3/5 inline-block"></BellIcon>
            </div>
          </div>
          <div className="flex flex-row ml-2 justify-center items-center">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="/me.jpeg"
              alt=""
            />
            <div className="flex flex-col ml-4">
              <p className="text-sm">Subodh</p>
            </div>
          </div>
        </div>
      </div>
      {childComponent}
    </div>
  );
}
