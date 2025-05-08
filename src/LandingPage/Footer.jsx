import { FooterInfo } from "../assets/Info";
import Logo from "../assets/Logo/logo.svg";
import {
  Dribble,
  Facebook,
  GithubFooter,
  Instagram,
  Twitter,
} from "../assets/SVG";
import FooterCard from "../Helpers/FooterCard";

const Icons = [
  <Facebook />,
  <Instagram />,
  <Twitter />,
  <GithubFooter />,
  <Dribble />,
];

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {FooterInfo.map((Data) => (
            <FooterCard key={Data.id} Title={Data.Title} Link={Data.Link} />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>

        {/* Sun Footer */}
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={Logo}
              className="h-6 mr-3 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit{" "}
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {Icons.map((icon, index) => (
              <li className="text-gray-500" key={index}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
