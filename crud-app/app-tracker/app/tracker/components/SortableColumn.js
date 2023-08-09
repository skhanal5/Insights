"use client";

import { ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SortableColumn({ column }) {
  const [sortToggle, setSortToggle] = useState(false);

  const toggle = () => {
    setSortToggle(!sortToggle);
  };


  return (
    <button className="flex flex-row justify-items items-center"  onClick={toggle}>
      <span className="uppercase">{column}</span>
      {sortToggle ? (
        <ChevronUpIcon className="ml-2 w-3 h-3"></ChevronUpIcon>
      ) : (
        <ChevronDownIcon className="ml-2 w-3 h-3"></ChevronDownIcon>
      )}
    </button>
  );
}
