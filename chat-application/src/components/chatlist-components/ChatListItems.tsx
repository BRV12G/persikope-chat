// // components/ChatListItems.tsx
// interface ChatListItemsProps {
//   chats: string[];
// }

// export default function ChatListItems({ chats }: ChatListItemsProps) {
//   return (
//     <div>
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


// components/ChatListItems.tsx
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";

const tagStyles: Record<string, string> = {
  Demo: "bg-gray-100 text-gray-600",
  Signup: "bg-green-100 text-green-700",
  Content: "bg-green-50 text-green-600",
  internal: "bg-yellow-100 text-yellow-700",
  "Dont Send": "bg-red-100 text-red-600",
};

export default function ChatListItems() {
  const chats = [
    {
      name: "Test Skope Final 5",
      message: "Support2: This doesn't go on Tuesday...",
      tags: ["Demo"],
      phone: "+91 99718 44008",
      date: "Yesterday",
    },
    {
      name: "Periskope Team Chat",
      message: "Periskope: Test message",
      tags: ["Demo", "internal"],
      phone: "+91 99718 44008",
      date: "28-Feb-25",
    },
    {
      name: "+91 99999 99999",
      message: "Hi there, I’m Swapnika, Co-Founder of...",
      tags: ["Demo", "Signup"],
      phone: "+91 92896 65999",
      date: "25-Feb-25",
    },
    {
      name: "Test Demo17",
      message: "Rohosen: 123",
      tags: ["Content"],
      phone: "+91 99718 44008",
      date: "25-Feb-25",
    },
    {
      name: "Test El Centro",
      message: "Roshnag: Hello, Ahmadport!",
      tags: ["Demo"],
      phone: "+91 99718 44008",
      date: "04-Feb-25",
    },
    {
      name: "Testing group",
      message: "Testing 12345",
      tags: [],
      phone: "+91 92896 65999",
      date: "27-Jan-25",
    },
    {
      name: "Yasin 3",
      message: "First Bulk Message",
      tags: ["Demo", "Dont Send"],
      phone: "+91 99718 44008",
      date: "25-Nov-24",
    },
    {
      name: "Test Skope Final 9473",
      message: "Heyy",
      tags: ["Demo"],
      phone: "+91 99718 44008",
      date: "01-Jan-25",
    },
    {
      name: "Skope Demo",
      message: "test 123",
      tags: [],
      phone: "+91 92896 65999",
      date: "20-Dec-24",
    },
    {
      name: "Test Demo15",
      message: "",
      tags: ["Demo"],
      phone: "+91 92896 65999",
      date: "20-Dec-24",
    },
  ];

  return (
    <div className="h-full overflow-y-auto custom-scroll">
      {chats.map((chat, i) => (
        <div
          key={i}
          className="p-3 hover:bg-gray-100 cursor-pointer flex gap-3 text-sm"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <FaUserCircle className="w-10 h-10 text-gray-300" />
          </div>

          {/* Main content */}
          <div className="flex flex-col flex-grow overflow-hidden">
            {/* Top: Name and Tags */}
            <div className="flex justify-between items-start">
              <div className="font-medium text-sm text-gray-900 truncate">{chat.name}</div>
              <div className="flex flex-wrap gap-1 justify-end">
                {chat.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-0.5 rounded-full ${tagStyles[tag] || "bg-gray-100 text-gray-600"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: Last message or fallback */}
            <div className="text-gray-600 text-sm truncate">
              {chat.message || "Start conversation"}
            </div>

            {/* Bottom: Phone number and date */}
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="w-3 h-3" />
                {chat.phone}
              </div>
              <div>{chat.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

