import { FaPhoneAlt, FaArrowRight, FaMicrochip } from 'react-icons/fa';
import { GrWordpress, GrCheckmark } from 'react-icons/gr';
import { MdSupportAgent, MdDesignServices, MdPhotoCamera } from 'react-icons/md';
import { TiThMenu, TiTimes } from "react-icons/ti";
import {
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
            case 'design':
                return <MdDesignServices {...rest}/>;
            case 'wordpress':
                return <GrWordpress {...rest}/>;
            case 'camera':
                return <MdPhotoCamera {...rest}/>;
            case 'check':
                return <GrCheckmark {...rest}/>;
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