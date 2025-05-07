import React from "react";
import CardBox from "./CardBox";

export default function Card({ Logo, Data }) {
  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {Data.map((data, index) => (
        <CardBox
          key={index}
          Logo={Logo[index]}
          Title={data.Title}
          Description={data.Description}
        />
      ))}
    </div>
  );
}
