import { CalendarDaysIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function MainPanel() {
    return(
      <div className="flex-1 bg-gray-100">
         <div className="flex flex-col ml-10 mr-10 mt-10">
            <div>
                <div>
                  <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
                  <p className="mt-1 text-sm font-light font-gray-100"> Here are some insights for your job search. </p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
                  <h2>Callback %</h2>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
                  <h2>Callback %</h2>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
                  <h2>Callback %</h2>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-5 w-fit">
                  <h2>Callback %</h2>
                </div>
            </div>
            <div className="flex flex-row shadow-lg rounded-lg bg-blue-600 mt-10 p-10 h-auto w-auto">
              <div>
                  <p className="text-lg font-semibold text-white">Friendly Reminder!</p>
                  <p className="text-sm font-light text-white mt-5">It has been "X" days since you applied to "Company" on "00/00/0000". Double check your application and update your status!</p>
                  <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs mt-5 py-2 px-4 rounded">View status</button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-1/2 p-5 mt-10">
                <h3 className="font-bold font-blue-700"> Weekly Overview </h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo sit amet dolor euismod lacinia vel ac risus.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-1/2 p-5 mt-10">
                <h3 className="font-bold font-blue-700"> Recent Applications </h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo sit amet dolor euismod lacinia vel ac risus.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-1/2 p-5 mt-10">
                <h3 className="font-bold font-blue-700"> This week's tasks </h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo sit amet dolor euismod lacinia vel ac risus.</p>
            </div>
         </div>
      </div>
  )
}