import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Vipul99999", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "linkedin.com/in/vipul-kumar-patel-88561a227", label: "LinkedIn" },
  // { icon: <FaYoutube />, path: "https://youtube.com/", label: "YouTube" },
  // { icon: <FaTwitter />, path: "https://twitter.com/", label: "Twitter" },
];

function Social({ containerStyles = "", iconStyles = "" }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.label} profile`}
        >
          <span className={`${iconStyles} text-3xl`}>{item.icon}</span>

        </Link>
      ))}
    </div>
  );
}

export default Social;
