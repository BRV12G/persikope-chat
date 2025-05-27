// components/TopHeader.tsx
import { FiRefreshCw, FiHelpCircle } from "react-icons/fi";
import { IoChatbubbleEllipses  } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { FaBellSlash } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSparkles } from "react-icons/io5";

export default function TopHeader() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-3 text-sm">
      {/* Left section: Chats title and icon */}
      <div className="flex items-center space-x-2 text-gray-600 font-medium">
        <IoChatbubbleEllipses className="w-4 h-4 text-gray-400" />
        <span className="text-gray-400 font-bold">chats</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded shadow-sm cursor-pointer"><FiRefreshCw className="w-4 h-4 text-gray-600 cursor-pointer"  />Refresh</div>
        <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded shadow-sm cursor-pointer"><FiHelpCircle className="w-4 h-4 text-gray-600 cursor-pointer"  />Help</div>
        <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded shadow-sm cursor-pointer"><FaCircle className="text-yellow-300"/>5/6 phones <LuChevronsUpDown className="text-gray-400"/> </div>
        <div className="flex items-center gap-2 border border-gray-300 px-2  py-1.5 rounded shadow-sm cursor-pointer"><MdInstallDesktop className="w-4 h-4 text-gray-600 cursor-pointer"  /></div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 py-1.5 rounded shadow-sm cursor-pointer"><FaBellSlash className="w-4 h-4 text-gray-600 cursor-pointer"  /></div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 py-1.5 rounded shadow-sm cursor-pointer"><IoSparkles className="text-yellow-300"/>< TfiMenuAlt className="w-4 h-4 text-gray-600 cursor-pointer"  /></div>


      </div>
    </div>
  );
}
