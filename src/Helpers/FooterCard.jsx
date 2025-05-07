import React from "react";
import Anker_footer from "../components/Anker/Anker_footer";
import Title_smallestfont from "../components/Title/Title_smallestfont";

export default function FooterCard({ Title, Link }) {
  return (
    <div>
      <Title_smallestfont text={Title} />
      <ul className="flex flex-col gap-3 text-gray-500 dark:text-gray-400">
        {Link.map((link, index) => (
          <Anker_footer key={index} link={link} />
        ))}
      </ul>
    </div>
  );
}
