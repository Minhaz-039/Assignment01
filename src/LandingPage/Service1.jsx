import React from "react";
import Service_Helper from "../Helpers/Service_Helper";
import { Section1 } from "../assets/Info";

export default function Service1() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <Service_Helper Data={Section1.SubSection1} Reverse={false} />
        <Service_Helper Data={Section1.SubSection2} Reverse={true} />
      </div>
    </div>
  );
}
