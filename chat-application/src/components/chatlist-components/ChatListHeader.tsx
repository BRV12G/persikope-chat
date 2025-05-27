// components/ChatListHeader.tsx
import { FiFolder, FiSearch, FiFilter, FiX } from "react-icons/fi";
import { RiFolderDownloadFill } from "react-icons/ri";
import { IoFilter } from "react-icons/io5";

export default function ChatListHeader() {
  return (
    <div className="flex items-center px-3 py-2 border-b bg-gray-100 gap-2 text-sm font-[500] ">
      {/* Custom Filter Button */}
      <button className="flex items-center gap-1  py-[6px] rounded-md bg-transparent text-green-700 hover:bg-green-50 border border-transparent cursor-pointer">
        <RiFolderDownloadFill className="w-4 h-4" />
        <span className="font-bold">Custom filter</span>
      </button>

      {/* Save Button */}
      <button className="px-2 py-[4px] text-xs text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 bg-white font-bold cursor-pointer">
        Save
      </button>
      
     <div className="flex items-center space-x-2 ml-auto">
      {/* Search Input Styled as Button */}
      <button className="flex items-center gap-1 px-3 py-[6px] border border-gray-200 rounded-md text-gray-700 text-xs hover:bg-gray-50 bg-white cursor-pointer">
        <FiSearch className="w-4 h-4" />
        Search
      </button>

      {/* Filtered Button */}
      <div className="relative">
        <button className="flex items-center gap-1 px-3 py-[6px] rounded-md bg-white text-green-700 text-xs border border-gray-200 font-semibold cursor-pointer">
          <IoFilter  className="w-4 h-4" />
          Filtered
        </button>
        <FiX className="absolute -top-1 -right-1 w-3 h-3 text-white bg-green-600 rounded-full cursor-pointer" />
      </div>
      </div>
    </div>
  );
}
