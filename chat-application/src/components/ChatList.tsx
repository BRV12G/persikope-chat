// // components/ChatList.tsx
// export default function ChatList() {
//   const chats = [
//     "Test Skope Final 5",
//     "Periskope Team Chat",
//     "+91 99999 99999",
//     "Test Demo17",
//     "Test El Centro",
//     "Testing group",
//     "Yasin 3",
//     "Test Skope Final 9473",
//     "Skope Demo",
//     "Test Demo5",
//   ];

//   return (
//     <div className="w-64 bg-white border-r overflow-y-auto">
//       <div className="flex justify-between items-center px-2 py-2 border-b">
//         <button className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Custom filter</button>
//         <button className="text-xs text-gray-500">Filtered</button>
//       </div>
//       {chats.map((name, i) => (
//         <div
//           key={i}
//           className="p-2 border-b hover:bg-gray-100 cursor-pointer text-sm"
//         >
//           <div className="font-medium">{name}</div>
//           <div className="text-xs text-gray-500">Demo</div>
//         </div>
//       ))}
//     </div>
//   );
// }


// components/ChatList.tsx
import ChatListHeader from "@/components/chatlist-components/ChatListHeader";
import ChatListItems from "@/components/chatlist-components/ChatListItems";
import { BsChatDots } from "react-icons/bs";
import { TbMessageCirclePlus } from "react-icons/tb";

export default function ChatList() {
  const chats = [
    "Test Skope Final 5",
    "Periskope Team Chat",
    "+91 99999 99999",
    "Test Demo17",
    "Test El Centro",
    "Testing group",
    "Yasin 3",
    "Test Skope Final 9473",
    "Skope Demo",
    "Test Demo5",
  ];

  return (
    <div className="w-100 bg-white border-r border-gray-200  relative">
      {/* Chat List Header */}
      <ChatListHeader />

      {/* Chat Items */}
      <ChatListItems  />

      {/* New Chat Button */}
      <button
        className="absolute bottom-4 right-4 bg-green-700 hover:bg-green-700 text-white p-3 rounded-full shadow-md cursor-pointer"
        title="New Chat"
      >
        <TbMessageCirclePlus className="w-6 h-6" />
      </button>
    </div>
  );
}

