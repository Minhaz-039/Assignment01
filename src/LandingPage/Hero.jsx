import HeroImage from "../assets/Images/hero.png";
import { HERO } from "../assets/Info";
import { Figma, Github } from "../assets/SVG";
import Button_Linked from "../components/Buttons/Button_Linked";
import Description_bigfont from "../components/Description/Description_bigfont";
import Title_bigfont from "../components/Title/Title_bigfont";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* THis is the text part */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <Title_bigfont text={HERO.Title1} />
          <Description_bigfont text={HERO.Description1} />
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Button_Linked logo={<Github />} text={HERO.Btn_git} />
            <Button_Linked logo={<Figma />} text={HERO.Btn_figma} />
          </div>
        </div>

        {/* This is the image part */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={HeroImage} alt="Hero pic" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
