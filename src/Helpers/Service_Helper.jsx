import figure1 from "../assets/Images/feature-1.png";
import figure2 from "../assets/Images/feature-2.png";
import { Tick } from "../assets/SVG";
import Bulletpoint_tick from "../components/Bulletpoint/Bulletpoint_tick";
import Description_bigfont from "../components/Description/Description_bigfont";
import Title_mediumfont from "../components/Title/Title_mediumfont";

export default function Service_Helper({ Data, Reverse }) {
  return (
    <div className={`items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16`}>
      <div
        className={`text-gray-500 sm:text-lg dark:text-gray-400 ${
          Reverse ? "lg:order-2" : "lg:order-1"
        } `}
      >
        <Title_mediumfont text={Data.Title} />
        <Description_bigfont text={Data.Description1} />
        <Bulletpoint_tick Data={Data.Bulletpoint} Logo={<Tick />} />
        <hr />
        <Description_bigfont text={Data.Description2} />
      </div>
      <div className={`${Reverse ? "lg:order-1" : "lg:order-2"}`}>
        <img src={Reverse ? figure2 : figure1} alt="" />
      </div>
    </div>
  );
}
