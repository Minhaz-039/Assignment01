import React from "react";

export default function Anker_Navigation({ text, Logo }) {
  return (
    <a
      href="#"
      className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
    >
      {text}
      {Logo ? Logo : ""}
    </a>
  );
}
