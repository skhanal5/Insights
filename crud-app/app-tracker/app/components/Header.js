import { BellIcon, MoonIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';

export default function Header({ childComponent }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
          <p className="mt-1 text-sm font-light font-gray-100">
            Here are some quick insights for your job search.
          </p>
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
