import React from "react";
import Button_Normal from "../components/Buttons/Button_Normal";
import HeaderLinks from "../Helpers/HeaderLinks";
import LogoShow from "../Helpers/LogoShow";

export default function Header() {
  return (
    <div className="fixed w-full">
      <div className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <LogoShow />
          <HeaderLinks />
          <Button_Normal text={"Download"} />
        </div>
      </div>
    </div>
  );
}
