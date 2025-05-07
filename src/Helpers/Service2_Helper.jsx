import React from "react";
import Anker_Navigation from "../components/Anker/Anker_Navigation";
import Description_bigfont from "../components/Description/Description_bigfont";
import Title_mediumfont from "../components/Title/Title_mediumfont";

export default function Service2_Helper({ Logo, Data }) {
  return (
    <div className="col-span-2 mb-8">
      <Anker_Navigation Logo={""} text={Data.Bulletpoint.one} />
      <Title_mediumfont text={Data.Title} />
      <Description_bigfont text={Data.Description} />

      <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <Anker_Navigation Logo={Logo} text={Data.Bulletpoint.two} />
        </div>
        <div>
          <Anker_Navigation Logo={Logo} text={Data.Bulletpoint.three} />
        </div>
      </div>
    </div>
  );
}
