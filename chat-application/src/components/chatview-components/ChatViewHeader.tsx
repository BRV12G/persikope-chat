import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function ChatViewHeader() {
  const participants = ["H", "R", "B", "A", "S", "+"];

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-gray-400 text-3xl" />
        <div>
          <div className="font-bold text-md">Test El Centro</div>
          <div className="text-xs text-gray-300">Roshnaq Airtel, Roshnaq Jio, Bharat Kumar Ramesh, Periskope</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {participants.slice(0, 5).map((name, idx) => (
          <div
            key={idx}
            className="w-6 h-6 rounded-full bg-green-100 text-xs flex items-center justify-center font-medium text-green-800"
          >
            {name}
          </div>
        ))}
        <div className="mr-4 flex items-center gap-2 ml-4">
        <HiSparkles  className="text-gray-700 text-xl cursor-pointer" />
        <FaSearch className="text-gray-700 text-xl ml-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
