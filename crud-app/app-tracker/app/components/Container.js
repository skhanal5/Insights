import Header from "./Header";
export default function Container({childComponent}) {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex flex-col ml-10 mr-10 mt-10">
        <Header childComponent={childComponent}></Header>
      </div>
    </div>
  );
}
