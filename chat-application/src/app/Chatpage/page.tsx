// app/page.tsx
import LeftSidebar from "@/components/LeftSidebar";
import TopHeader from "@/components/TopHeader";
import ChatList from "@/components/ChatList";
import ChatView from "@/components/ChatView";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-sm">
      <LeftSidebar />
      <div className="flex flex-col flex-grow">
        <TopHeader />
        <div className="flex flex-grow overflow-hidden">
          <ChatList />
          <ChatView />
            <div className="w-16 h-full bg-white border-l flex flex-col items-center pt-3 space-y-3 relative">
                <RightSidebar /></div>
        </div>
      </div>
      {/* <RightSidebar /> */}
    </div>
  );
}
