import React from "react";
import Description_smallfont from "../components/Description/Description_smallfont";
import Title_smallfont from "../components/Title/Title_smallfont";

export default function CardBox({ Logo, Title, Description }) {
  return (
    <div>
      {Logo}
      <Title_smallfont text={Title} />
      <Description_smallfont text={Description} />
    </div>
  );
}
