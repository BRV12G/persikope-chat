// components/LeftSidebar.tsx
import {
  FaFilter,
  FaComments,
  FaPhoneAlt,
  FaUsers,
  FaClock,
  FaCog,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiSpeakerphone } from "react-icons/hi";
import { TiFlowMerge } from "react-icons/ti";
import { RiContactsBookFill } from "react-icons/ri";
import { RiFolderImageFill } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { TbStarsFilled } from "react-icons/tb";
import { LuPanelLeftOpen } from "react-icons/lu";


import { BsPersonCircle } from "react-icons/bs";

export default function LeftSidebar() {
  return (
    <div className="w-14 h-full bg-[#f7f7f7] border-r border-gray-200 flex flex-col items-center justify-between py-4">
      <div className="space-y-5">
        <IoMdHome className="text-gray-600 w-5 h-5 cursor-pointer" title="Home" />
        <IoChatbubbleEllipses className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
        <IoTicket className="text-green-600 w-5 h-5 cursor-pointer" title="Chat" />
        <GoGraph  className="text-gray-600 w-5 h-5 cursor-pointer" title="Calls" />
        <TfiMenuAlt  className="text-gray-600 w-5 h-5 cursor-pointer" title="Groups" />
        <HiSpeakerphone  className="text-gray-600 w-5 h-5 cursor-pointer" title="History" />
        <TiFlowMerge   className="text-gray-600 w-5 h-5 cursor-pointer" title="History" />
        <RiContactsBookFill  className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
        <RiFolderImageFill  className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
        <MdChecklist className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
        <IoIosSettings className="text-gray-600 w-5 h-5 cursor-pointer" title="Settings" />
      </div>
      <div className="space-y-5">
        <TbStarsFilled className="text-gray-600 w-5 h-5 cursor-pointer" title="Profile" />
        <LuPanelLeftOpen className="text-gray-600 w-5 h-5 cursor-pointer" title="Settings" />
      </div>
    </div>
  );
}
