import Image from "next/image";

export default function Reminder() {
  return (
    <div className="flex flex-row h-fit bg-blue-600 p-5 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <h3 className="font-bold text-white"> Quick Reminder </h3>
        <p className="text-sm font-light text-white mt-3">
          It has been "X" days since you applied to "Company" on "00/00/0000".
          Double check your application and update your status!
        </p>
        <div className="mt-10 text-center">
          <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs py-2 px-4 rounded">
            View status
          </button>
        </div>
      </div>
    </div>
  );
}
