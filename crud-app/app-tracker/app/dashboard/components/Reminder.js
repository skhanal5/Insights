import Image from "next/image";

export default function Reminder() {
  return (
    <div className="flex flex-row bg-blue-600 rounded-lg shadow-lg w-full relative overflow-hidden">
      <div>
        <Image
          src="/remind.svg"
          alt="Your Image"
          width={200}
          height={100}
          className="absolute w-full h-100 left-24 object-cover z-0"
        />
      </div>
      <div className="flex flex-col flex-wrap p-4 w-52">
        <h3 className="font-bold text-white"> Recent Tasks </h3>
        <p className="text-sm font-light text-white mt-5">
          It has been "X" days since you applied to "Company" on "00/00/0000".
          Double check your application and update your status!
        </p>
        <div>
          <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs mt-5 py-2 px-4 rounded">
            View status
          </button>
        </div>
      </div>
    </div>
  );
}
