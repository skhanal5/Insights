export default function Reminder() {
  return (
    <div className="flex flex-row shadow-lg rounded-lg bg-blue-600 mt-5 p-5">
      <div>
        <p className="text-lg font-semibold text-white">Friendly Reminder!</p>
        <p className="text-sm font-light text-white mt-5">
          It has been "X" days since you applied to "Company" on "00/00/0000".
          Double check your application and update your status!
        </p>
        <button className="bg-white hover:bg-blue-100 shadow-lg text-blue-500 font-semibold text-xs mt-5 py-2 px-4 rounded">
          View status
        </button>
      </div>
    </div>
  );
}
