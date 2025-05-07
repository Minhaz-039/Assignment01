import React from "react";
import { TrialInfo } from "../assets/Info";
import Button_Normal from "../components/Buttons/Button_Normal";
import Description_mediumfont from "../components/Description/Description_mediumfont";
import Title_mediumfont from "../components/Title/Title_mediumfont";

export default function Trial() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto space-y-6 text-center">
          <Title_mediumfont text={TrialInfo.Title} />
          <Description_mediumfont text={TrialInfo.Description} />
          <Button_Normal text={TrialInfo.ButtonText} />
        </div>
      </div>
    </div>
  );
}
