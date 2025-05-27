// components/ChatView.tsx
export default function ChatView() {
  return (
    <div className="flex-grow flex flex-col justify-between " style={{ backgroundImage: "url('/whatsapp_background.jpg')" }} >
      <div className="p-4 space-y-2 overflow-y-auto">
        <div className="text-center text-gray-500 text-xs "><div className="bg-gray-100 rounded p-2 inline-block text-xs shadow">22-01-2025</div></div>
        <div className="text-left">
          <div className="bg-white rounded p-2 inline-block text-xs shadow">Hello, South Euna!</div>
        </div>
        <div className="text-left">
          <div className="bg-white rounded p-2 inline-block text-xs shadow">Hello, Livonia!</div>
        </div>
                <div className="text-center text-gray-500 text-xs "><div className="bg-gray-100 rounded p-2 inline-block text-xs shadow">23-01-2025</div></div>

        <div className="text-left">
          <div className="bg-white rounded p-2 inline-block text-xs shadow">CDERT</div>
        </div>
        <div className="text-right">
          <div className="bg-green-100 text-green-800 rounded p-2 inline-block text-xs shadow">hello</div>
        </div>
        <div className="text-right">
          <div className="bg-green-100 text-green-800 rounded p-2 inline-block text-xs shadow">test el centro</div>
        </div>
        <div className="text-right">
          <div className="bg-green-100 text-green-800 rounded p-2 inline-block text-xs shadow">testing</div>
        </div>
      </div>
      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          placeholder="Message..."
          className="flex-grow px-3 py-1 border rounded-full text-sm"
        />
        <button className="ml-2 text-green-600">▶️</button>
      </div>
    </div>
  );
}
