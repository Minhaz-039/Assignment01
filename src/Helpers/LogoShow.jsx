import Logo from "../assets/Logo/logo.png";

export default function LogoShow() {
  return (
    <a href="#" className="flex items-center">
      <img src={Logo} className="h-6 mr-3 sm:h-9" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Learn with Sumit
      </span>
    </a>
  );
}
