import {FaPhoneAlt, FaArrowRight, FaMicrochip} from 'react-icons/fa';
import {MdSupportAgent} from 'react-icons/md';
import { TiThMenu, TiTimes } from "react-icons/ti";
import {
    HiPaperAirplane,
    HiDatabase,
    HiCloudUpload,
    HiServer,
  } from "react-icons/hi";


function Icon({iconType, ...rest}) {
    const iconHandler = () => {
        switch(iconType) {
            case 'phone':
                return  <FaPhoneAlt {...rest}/>;
            case 'rightArrow':
                return <FaArrowRight {...rest}/>;
            case 'chip':
                return <FaMicrochip {...rest}/>;
            case 'support-agent':
                return <MdSupportAgent {...rest}/>;
            case 'hamburger':
                return <TiThMenu {...rest}/>;
            case 'close':
                return <TiTimes {...rest}/>;
            case 'airplane':
                return <HiPaperAirplane {...rest}/>;
            case 'database':
                return <HiDatabase {...rest}/>;
            case 'cloud':
                return <HiCloudUpload {...rest}/>;
            case 'server':
                return <HiServer {...rest}/>;
            default:
                return;
        }
    }

    const icon = iconHandler();
  return (
    <div>{icon}</div>
  )
}

export {Icon}