

// // components/LeftSidebar.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { IoMdHome } from "react-icons/io";
// import { IoChatbubbleEllipses, IoTicket } from "react-icons/io5";
// import { GoGraph } from "react-icons/go";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { HiSpeakerphone } from "react-icons/hi";
// import { TiFlowMerge } from "react-icons/ti";
// import { RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
// import { MdChecklist } from "react-icons/md";
// import { IoIosSettings } from "react-icons/io";
// import { TbStarsFilled } from "react-icons/tb";
// import { LuPanelLeftOpen } from "react-icons/lu";

// export default function LeftSidebar() {
//   const router = useRouter();

//   // Define icon config: { icon, path, title }
//   const navItems = [
//     { icon: <IoMdHome />, path: "/home", title: "Home" },
//     { divider: true },
//     { icon: <IoChatbubbleEllipses />, path: "/Chatpage", title: "Filter" },
//     { icon: <IoTicket />, path: "/chat", title: "Chat" },
//     { icon: <GoGraph />, path: "/calls", title: "Calls" },
//     { divider: true },
//     { icon: <TfiMenuAlt />, path: "/groups", title: "Groups" },
//     { icon: <HiSpeakerphone />, path: "/broadcast", title: "Broadcast" },
//     { icon: <TiFlowMerge />, path: "/merge", title: "Merge" },
//     { divider: true },
//     { icon: <RiContactsBookFill />, path: "/contacts", title: "Contacts" },
//     { icon: <RiFolderImageFill />, path: "/media", title: "Media" },
//     { divider: true },
//     { icon: <MdChecklist />, path: "/checklist", title: "Checklist" },
//     { icon: <IoIosSettings />, path: "/settings", title: "Settings" },
//   ];

//   const footerItems = [
//     { icon: <TbStarsFilled />, path: "/favorites", title: "Favorites" },
//     { icon: <LuPanelLeftOpen />, path: "/collapse", title: "Collapse" },
//   ];

//   return (
//     <div className="w-14 h-full bg-[#f7f7f7] border-r border-gray-200 flex flex-col items-center justify-between p-2">
//       <div className="items-center space-y-4 w-full">
//         {/* Logo */}
//         <div className="mb-6">
//           <Image
//             src="/logo2.png"
//             alt="App Logo"
//             width={36}
//             height={36}
//             className="rounded-full cursor-pointer"
//           />
//         </div>

//         {/* Main Icons */}
//         <div className="items-center space-y-4 w-full">
//           {navItems.map((item, index) =>
//             item.divider ? (
//               <div key={`divider-${index}`} className="w-full border-b border-gray-300" />
//             ) : (
//               <Link href={item.path} key={item.path} className="w-full flex justify-center">
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer transition-all ${
//                     router.pathname === item.path
//                       ? "bg-gray-200 text-green-600"
//                       : "text-gray-600 hover:text-green-600 hover:bg-gray-100"
//                   }`}
//                   title={item.title}
//                 >
//                   {item.icon}
//                 </div>
//               </Link>
//             )
//           )}
//         </div>
//       </div>

//       {/* Footer Icons */}
//       <div className="space-y-4 pt-4">
//         {footerItems.map((item) => (
//           <Link href={item.path} key={item.path} className="w-full flex justify-center">
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer transition-all ${
//                 router.pathname === item.path
//                   ? "bg-gray-200 text-green-600"
//                   : "text-gray-600 hover:text-green-600 hover:bg-gray-100"
//               }`}
//               title={item.title}
//             >
//               {item.icon}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// components/LeftSidebar.tsx
"use client"; // ⬅️ Required for using usePathname

import Image from "next/image";
import Link from "next/link"; // ⬅️ For navigation
import { usePathname } from "next/navigation"; // ⬅️ To get current route

// Icon imports
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

// Reusable IconLink component
const IconLink = ({ href, Icon, title }: { href: string; Icon: any; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        className={`w-full flex items-center justify-center p-2 rounded-md ${
          isActive ? "bg-gray-200 text-green-700" : "text-gray-600"
        }`}
        title={title}
      >
        <Icon className="w-5 h-5 cursor-pointer hover:text-green-600" />
      </button>
    </Link>
  );
};

export default function LeftSidebar() {
  return (
    <div className="w-14  bg-[#f7f7f7] border-r border-gray-200 flex flex-col items-center justify-between p-2">
      <div className="items-center space-y-6 w-full">
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

        {/* Top Icons */}
        <div className=" items-center space-y-4 w-full">
          {/* Icon 1 */}
          <IconLink href="/" Icon={IoMdHome} title="Home" />
          <div className="w-full border-b border-gray-300" /> {/* 🔽 1st border */}

          {/* Icons 2-4 */}
          <IconLink href="/Chatpage" Icon={IoChatbubbleEllipses} title="Filter" />
          <IconLink href="/chat" Icon={IoTicket} title="Chat" />
          <IconLink href="/calls" Icon={GoGraph} title="Calls" />
          <div className="w-full border-b border-gray-300" /> {/* 🔽 2nd border */}

          {/* Icons 5-7 */}
          <IconLink href="/groups" Icon={TfiMenuAlt} title="Groups" />
          <IconLink href="/broadcast" Icon={HiSpeakerphone} title="Broadcast" />
          <IconLink href="/merge" Icon={TiFlowMerge} title="Merge" />
          <div className="w-full border-b border-gray-300" /> {/* 🔽 3rd border */}

          {/* Icons 8-9 */}
          <IconLink href="/contacts" Icon={RiContactsBookFill} title="Contacts" />
          <IconLink href="/media" Icon={RiFolderImageFill} title="Media" />
          <div className="w-full border-b border-gray-300" /> {/* 🔽 4th border */}

          {/* Icons 10-11 */}
          <IconLink href="/checklist" Icon={MdChecklist} title="Checklist" />
          <IconLink href="/settings" Icon={IoIosSettings} title="Settings" />
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="space-y-6 pt-4">
        <IconLink href="/favorites" Icon={TbStarsFilled} title="Favorites" />
        <IconLink href="/collapse" Icon={LuPanelLeftOpen} title="Collapse" />
      </div>
    </div>
  );
}

