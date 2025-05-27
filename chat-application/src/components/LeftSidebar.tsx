// // components/LeftSidebar.tsx
// import Image from "next/image";
// import { IoMdHome } from "react-icons/io";
// import { IoChatbubbleEllipses } from "react-icons/io5";
// import { IoTicket } from "react-icons/io5";
// import { GoGraph } from "react-icons/go";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { HiSpeakerphone } from "react-icons/hi";
// import { TiFlowMerge } from "react-icons/ti";
// import { RiContactsBookFill } from "react-icons/ri";
// import { RiFolderImageFill } from "react-icons/ri";
// import { MdChecklist } from "react-icons/md";
// import { IoIosSettings } from "react-icons/io";
// import { TbStarsFilled } from "react-icons/tb";
// import { LuPanelLeftOpen } from "react-icons/lu";

// export default function LeftSidebar() {
//   return (
//     <div className="w-14 h-full bg-[#f7f7f7] border-r border-gray-200 flex flex-col items-center justify-between p-2">
//         <div className="flex flex-col items-center  space-y-4">
//           <Image
//             src="/logo2.png"
//             alt="App Logo"
//             width={36}
//             height={36}
//             className="rounded-full mb-5 cursor-pointer"
//           />
//       <div className="space-y-6">
//         <IoMdHome className="text-gray-600 w-5 h-5 cursor-pointer " title="Home" />
//         <IoChatbubbleEllipses className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
//         <IoTicket className="text-gray-600 w-5 h-5 cursor-pointer" title="Chat" />
//         <GoGraph  className="text-gray-600 w-5 h-5 cursor-pointer" title="Calls" />
//         <TfiMenuAlt  className="text-gray-600 w-5 h-5 cursor-pointer" title="Groups" />
//         <HiSpeakerphone  className="text-gray-600 w-5 h-5 cursor-pointer" title="History" />
//         <TiFlowMerge   className="text-gray-600 w-5 h-5 cursor-pointer" title="History" />
//         <RiContactsBookFill  className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
//         <RiFolderImageFill  className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
//         <MdChecklist className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
//         <IoIosSettings className="text-gray-600 w-5 h-5 cursor-pointer" title="Settings" />
//       </div>
//       </div>
//       <div className="space-y-6">
//         <TbStarsFilled className="text-gray-600 w-5 h-5 cursor-pointer" title="Profile" />
//         <LuPanelLeftOpen className="text-gray-600 w-5 h-5 cursor-pointer" title="Settings" />
//       </div>
//     </div>
//   );
// }

// components/LeftSidebar.tsx
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoChatbubbleEllipses, IoTicket } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiSpeakerphone } from "react-icons/hi";
import { TiFlowMerge } from "react-icons/ti";
import { RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { TbStarsFilled } from "react-icons/tb";
import { LuPanelLeftOpen } from "react-icons/lu";

export default function LeftSidebar() {
  return (
    <div className="w-14 h-full bg-[#f7f7f7] border-r border-gray-200 flex flex-col items-center justify-between p-2">
      <div className="flex flex-col items-center space-y-4 w-full">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo2.png"
            alt="App Logo"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
          />
        </div>

        {/* Icons */}
        <div className="flex flex-col items-center space-y-4 w-full">
          {/* Icon 1 */}
          <IoMdHome className="text-gray-600 w-5 h-5 cursor-pointer" title="Home" />
          <div className="w-full border-b border-gray-300" />

          {/* Icons 2-4 */}
          <IoChatbubbleEllipses className="text-gray-600 w-5 h-5 cursor-pointer" title="Filter" />
          <IoTicket className="text-gray-600 w-5 h-5 cursor-pointer" title="Chat" />
          <GoGraph className="text-gray-600 w-5 h-5 cursor-pointer" title="Calls" />
          <div className="w-full border-b border-gray-300" />

          {/* Icons 5-7 */}
          <TfiMenuAlt className="text-gray-600 w-5 h-5 cursor-pointer" title="Groups" />
          <HiSpeakerphone className="text-gray-600 w-5 h-5 cursor-pointer" title="Broadcast" />
          <TiFlowMerge className="text-gray-600 w-5 h-5 cursor-pointer" title="Merge" />
          <div className="w-full border-b border-gray-300" />

          {/* Icons 8-9 */}
          <RiContactsBookFill className="text-gray-600 w-5 h-5 cursor-pointer" title="Contacts" />
          <RiFolderImageFill className="text-gray-600 w-5 h-5 cursor-pointer" title="Media" />
          <div className="w-full border-b border-gray-300" />

          {/* Icons 10-11 */}
          <MdChecklist className="text-gray-600 w-5 h-5 cursor-pointer" title="Checklist" />
          <IoIosSettings className="text-gray-600 w-5 h-5 cursor-pointer" title="Settings" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 pt-4">
        <TbStarsFilled className="text-gray-600 w-5 h-5 cursor-pointer" title="Favorites" />
        <LuPanelLeftOpen className="text-gray-600 w-5 h-5 cursor-pointer" title="Collapse" />
      </div>
    </div>
  );
}

