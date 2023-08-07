import Image from "next/image";
export default function Reminder() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-row bg-blue-600 p-5 rounded-lg shadow-lg gap-5 justify-center items-center">
        <div className="flex flex-col gap-5 h-fit">
          <h3 className="font-bold text-white text-sm"> Quick Reminder! </h3>
          <p className="text-xs text-white">
            It has been "X" days since you applied to "Company". Send a follow
            up?
          </p>
          <div>
            <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs py-2 px-4 rounded">
              View status
            </button>
          </div>
        </div>
        <div>
          <Image src="/remind.svg" alt="reminder image" height={300} width={300} />
        </div>
      </div>
    </div>
  );
}
