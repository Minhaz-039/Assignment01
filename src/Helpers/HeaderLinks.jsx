import React from "react";
import { Links } from "../assets/Info";

export default function HeaderLinks() {
  return (
    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {Links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.link}`}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:bg-transparent lg:p-0 dark:text-white lg:dark:text-gray-400 hover:bg-gray-100 lg:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page"
            >
              {l.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
