export default function Header({childComponent}) {
  return (
    <div>
      <h2 className="font-bold text-2xl font-blue-700"> Dashboard </h2>
      <p className="mt-1 text-sm font-light font-gray-100">
        Here are some quick insights for your job search.
      </p>
      {childComponent}
    </div>
  );
}
