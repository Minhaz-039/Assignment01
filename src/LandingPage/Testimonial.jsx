import profile from "../assets/Avatar/michael-gouch.png";
import { TestimonialInfo } from "../assets/Info";
import { Quote } from "../assets/SVG";
import Title_smallfont from "../components/Title/Title_smallfont";

export default function Testimonial() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <Quote />
          <Title_smallfont text={TestimonialInfo.Title} />
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={profile}
              alt="Michale-gouch"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
