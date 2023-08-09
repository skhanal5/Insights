import AddNew from "./AddNew";
import SearchBar from "./SearchBar";
import Import from "./Import";
import StatusFilter from "./StatusFilter";

export default function Tools() {
  return (
    <div className="flex justify-between w-full mt-5">
      <SearchBar></SearchBar>
      <div className="flex flex-row gap-5">
        <StatusFilter></StatusFilter>
        <Import></Import>
        <AddNew></AddNew>
      </div>
    </div>
  );
}
