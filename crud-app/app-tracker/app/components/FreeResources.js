import Link from "next/link";
import Image from "next/image";

export default function FreeResources() {
  return (
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
  );
}
