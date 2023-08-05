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
        <div className="flex items-center">
          <div className="flex flex-col ml-4">
            <p className="text-sm font-bold"> Subodh Khanal </p>
          </div>
          <div className="ml-4">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="/me.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      {childComponent}
    </div>
  );
}
