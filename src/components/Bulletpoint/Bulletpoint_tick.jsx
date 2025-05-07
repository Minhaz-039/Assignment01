import React from "react";

export default function Bulletpoint_tick({ Logo, Data }) {
  return (
    <div>
      <ul
        role="list"
        className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
      >
        {Data.map((items, index) => (
          <li className="flex space-x-3 items-center gap-2 " key={index}>
            {Logo}
            {items.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
