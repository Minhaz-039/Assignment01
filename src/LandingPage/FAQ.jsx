import React, { useState } from "react";
import { FAQInfo } from "../assets/Info";
import Title_mediumfont from "../components/Title/Title_mediumfont";
import FAQ_Helper from "../Helpers/FAQ_Helper";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <div className="text-center">
          <Title_mediumfont text={FAQInfo.Title} />
        </div>

        <div className="max-w-screen-md mx-auto">
          {FAQInfo.faqs.map((faq, index) => (
            <FAQ_Helper
              key={index}
              faq={faq}
              openIndex={openIndex}
              index={index}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
