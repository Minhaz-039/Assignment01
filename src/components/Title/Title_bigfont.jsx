import React from "react";

export default function Title_bigfont({ text }) {
  return (
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
      {text}
    </h1>
  );
}
