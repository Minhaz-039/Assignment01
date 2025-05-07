import React from "react";
import Print_Companies_Logo from "../Helpers/Print_Companies_Logo";
import {
  Airbnb,
  Google,
  Malichimp,
  Mashable,
  Microsoft,
  Spotify,
} from "../assets/SVG";

const companyLogos = [
  <Airbnb />,
  <Google />,
  <Microsoft />,
  <Spotify />,
  <Malichimp />,
  <Mashable />,
];

export default function CompaniesLogo() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companyLogos.map((LogoComponent, index) => (
            <Print_Companies_Logo key={index} Logo={LogoComponent} />
          ))}
        </div>
      </div>
    </div>
  );
}
