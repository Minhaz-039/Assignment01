import React from "react";
import Button_Normal from "../components/Buttons/Button_Normal";
import Description_mediumfont from "../components/Description/Description_mediumfont";
import Title_smallfont from "../components/Title/Title_smallfont";

export default function PriceCard({
  Title,
  Description,
  Price,
  Bulletpoint,
  ButtonText,
  Greentick,
}) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <Title_smallfont text={Title} />
      <Description_mediumfont text={Description} />
      <div className="font-light py-6 text-gray-500 sm:text-lg dark:text-gray-400">
        <span className="mr-2 text-5xl text-white font-extrabold">
          ${Price}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {/* Just to avoid warning I used index  */}
        {Bulletpoint.map((info, index) => (
          <li key={index} className="flex items-center gap-3 ">
            {Greentick}
            {info}
          </li>
        ))}
      </ul>
      <Button_Normal text={ButtonText} />
    </div>
  );
}
