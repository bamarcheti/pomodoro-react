import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import globe from '../assets/globe.svg';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const SocialMedia = () => {
  return (
    <div className="my-3 items-center ml-3">
      <div className="flex flex-row sm:flex-row gap-3 items-center">
        <a href="http://bamarcheti.github.io/portfolio/">
          <img
            src={globe}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="globe"
            title="CV online"
          />
        </a>
        <a href="https://discord.com/channels/@ba_marcheti#3824">
          <img
            src={discord}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="discord"
            title="Discord"
          />
        </a>
        <a href="https://www.instagram.com/ba_marcheti/">
          <img
            src={instagram}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="instagram"
            title="Instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
          <img
            src={linkedin}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="linkedin"
            title="LinkedIn"
          />
        </a>
        <a href="mailto:bmarchetifiorin@gmail.com">
          <img
            src={gmail}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="gmail"
            title="Gmail"
          />
        </a>
        <a href="https://github.com/Bamarcheti">
          <img
            src={github}
            className="transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70"
            alt="github"
            title="Github"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
