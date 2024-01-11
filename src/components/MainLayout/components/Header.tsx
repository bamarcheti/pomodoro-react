import { Github, Globe, Instagram, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const iconStyle =
    'w-6 xl:w-8 h-6 xl:h-8 text-primary inline-block cursor-pointer transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70';

  return (
    <div className="flex flex-row shadow-md p-4 items-center justify-center md:justify-start gap-3">
      <a href="http://bamarcheti.github.io/portfolio/">
        <Globe className={iconStyle} />
      </a>
      <a href="https://www.instagram.com/ba_marcheti/">
        <Instagram className={iconStyle} />
      </a>
      <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
        <Linkedin className={iconStyle} />
      </a>
      <a href="mailto:bmarchetifiorin@gmail.com">
        <Mail className={iconStyle} />
      </a>
      <a href="https://github.com/Bamarcheti">
        <Github className={iconStyle} />
      </a>
    </div>
  );
};

export default Header;
