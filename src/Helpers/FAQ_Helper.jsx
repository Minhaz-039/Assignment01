import React from "react";
import { Arrow } from "../assets/SVG";

export default function FAQ_Helper({ openIndex, index, faq, toggleAccordion }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => toggleAccordion(index)}
        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 dark:text-white"
      >
        <span>{faq.question}</span>
        <Arrow openIndex={openIndex} index={index} />
      </button>
      {openIndex === index && <div className="py-5">{faq.answer}</div>}
    </div>
  );
}
