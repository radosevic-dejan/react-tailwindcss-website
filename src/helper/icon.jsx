import { FaArrowRight, FaBullhorn, FaCheckSquare } from "react-icons/fa";
import { GrWordpress} from "react-icons/gr";
import {
  MdDesignServices,
  MdPhotoCamera,
} from "react-icons/md";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { HiServer } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Icon({ iconType, ...rest }) {
  const iconHandler = () => {
    switch (iconType) {
      case "rightArrow":
        return <FaArrowRight {...rest} />;
      case "horn":
        return <FaBullhorn {...rest} />;
      case "hamburger":
        return <TiThMenu {...rest} />;
      case "close":
        return <TiTimes {...rest} />;
      case "design":
        return <MdDesignServices {...rest} />;
      case "wordpress":
        return <GrWordpress {...rest} />;
      case "camera":
        return <MdPhotoCamera {...rest} />;
      case "check":
        return <FaCheckSquare {...rest} />;
      case "server":
        return <HiServer {...rest} />;
      case "facebook":
        return <BsFacebook {...rest} />;
      case "instagram":
        return <BsInstagram {...rest} />;
      case "github":
        return <BsGithub {...rest} />;
      default:
        return;
    }
  };

  const icon = iconHandler();
  return icon;
}

export { Icon };
