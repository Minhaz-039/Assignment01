import React from "react";

export default function Button_Linked({ logo, text }) {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      {logo}
      {text}
    </a>
  );
}
