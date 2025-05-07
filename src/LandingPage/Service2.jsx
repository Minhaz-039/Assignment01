import React from "react";
import { Section2 } from "../assets/Info";
import {
  Cart,
  Countries,
  Maintainance,
  People,
  RightSide,
} from "../assets/SVG";
import Card from "../Helpers/Card";
import Service2_Helper from "../Helpers/Service2_Helper";

const SVG = [<Maintainance />, <People />, <Countries />, <Cart />];

export default function Service2() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <Service2_Helper
          Logo={<RightSide />}
          Data={Section2.Information_Part}
        />
        <Card Logo={SVG} Data={Section2.Card} />
      </div>
    </div>
  );
}
