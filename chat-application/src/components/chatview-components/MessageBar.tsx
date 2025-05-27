import {
  FaPaperclip, FaMicrophone, 
   FaStar, 
} from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { PiClockClockwiseThin } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";


import { IoMdSend } from "react-icons/io";
import Image from "next/image";

export default function MessageBar() {
  return (
    <div className="border-t border-gray-200 px-4 py-2 bg-white shadow-inner h-24">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Message..."
          className="flex-1   rounded-full px-4 py-2 text-sm focus:outline-gray-300  "
        />
        <button className="text-green-700 text-2xl">
          <IoMdSend />
        </button>
      </div>

      <div className="flex items-center justify-between mt-2 text-gray-600 text-lg">
        <div className="flex gap-6 items-center">
          <FaPaperclip className="cursor-pointer text-gray-700 text-lg"/>
          <CiFaceSmile className="cursor-pointer text-gray-700 text-lg"/>
          <GoClock className="cursor-pointer text-gray-700 text-lg" />
          <PiClockClockwiseThin  className="cursor-pointer text-gray-700 text-lg"/>
          <HiOutlineSparkles className="cursor-pointer text-gray-700 text-lg" />
          <IoDocumentText  className="cursor-pointer text-gray-700 text-lg"/>
          <FaMicrophone className="cursor-pointer text-gray-700 text-lg"/>
        </div>
        <div className="flex items-center justify-between gap-2 border border-gray-200 px-8 py-1 min-w-[250px] rounded-md">
        <div className="flex items-center gap-2 ">
                   <Image
                     src="/logo2.png"
                     alt="App Logo"
                     width={20}
                     height={20}
                     className="rounded-full cursor-pointer"
                   />
        <span className="text-sm font-medium text-green-600">Periskope</span>
        </div>
            <LuChevronsUpDown className=" cursor-pointer text-gray-400 text-lg" />
        </div>
      </div>
    </div>
  );
}
