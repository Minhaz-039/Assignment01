import React from "react";
import { PricingInfo } from "../assets/Info";
import { Greentick } from "../assets/SVG";
import Description_bigfont from "../components/Description/Description_bigfont";
import Title_mediumfont from "../components/Title/Title_mediumfont";
import PriceCard from "../Helpers/PriceCard";

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <Title_mediumfont text={PricingInfo.Title} />
          <Description_bigfont text={PricingInfo.Description} />
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {PricingInfo.Card.map((Card) => (
            <PriceCard
              key={Card.id}
              Title={Card.Title}
              Description={Card.Description}
              Price={Card.Price}
              Bulletpoint={Card.Bulletpoint}
              ButtonText={Card.ButtonText}
              Greentick={<Greentick />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
