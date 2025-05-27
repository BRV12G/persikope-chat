// components/RightSidebar.tsx
import { FiSearch, FiCalendar } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { HiVideoCamera, HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdPersonAddAlt } from "react-icons/md";
import { TbLocationFilled, TbNotes } from "react-icons/tb";
import { LuPanelRightOpen } from "react-icons/lu";
import { LuRefreshCw } from "react-icons/lu";
import { RiEditLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosGitPullRequest } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { IoAt } from "react-icons/io5";
import { RiFolderImageFill } from "react-icons/ri";
import { TbTableOptions } from "react-icons/tb";

export default function RightSidebar() {
  return (
    <div className="w-14 h-full bg-white border-l border-gray-200 flex flex-col items-center p-2 space-y-6">
      {/* Right Sidebar Icons */}
      <LuPanelRightOpen className="w-5 h-5 text-gray-300 cursor-pointer" title="Search" />
      <LuRefreshCw className="w-5 h-5 text-gray-300 cursor-pointer" title="Chat" />
      <RiEditLine className="w-5 h-5 text-gray-300 cursor-pointer" title="Bookmark" />
      <RiMenu3Fill  className="w-5 h-5 text-gray-300 cursor-pointer" title="Video Call" />
      <MdOutlineDashboard  className="w-5 h-5 text-gray-300 cursor-pointer" title="Filter" />
      <IoIosGitPullRequest className="w-5 h-5 text-gray-300 cursor-pointer" title="Calendar" />
      <HiUserGroup  className="w-5 h-5 text-gray-300 cursor-pointer" title="Add Person" />
      <IoAt  className="w-5 h-5 text-gray-300 cursor-pointer" title="Location" />
      <RiFolderImageFill className="w-5 h-5 text-gray-300 cursor-pointer" title="Notes" />
      <TbTableOptions  className="w-5 h-5 text-gray-300 cursor-pointer" title="More Options" />
    </div>
  );
}
