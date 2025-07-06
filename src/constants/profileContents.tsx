import { FaSquareGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const profileContents = [
	{
		content: "Github",
		icon: <FaSquareGithub />,
          url: "https://github.com/jjordanxstw/",
	},
	{
          content: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/jjordanstw/",
     },
     {
          content: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/jjordanxstw/",
     },
     {
          content: "Twitter",
          icon: <FaSquareXTwitter />,
          url: "https://twitter.com/",
     }

];

export default profileContents;