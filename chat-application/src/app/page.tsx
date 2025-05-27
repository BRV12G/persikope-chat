// // app/page.tsx
// // import ProtectedRoute from "@/components/ProtectedRoute";

// export default function Home() {
//   return (
//         // <ProtectedRoute>

//     <div className="flex h-screen w-screen overflow-hidden bg-white text-sm">
      
      
//       <a href="/Chatpage">Chatpage</a>
//       <a href="/login">Login</a>
//     </div>
//   // </ProtectedRoute>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    router.push("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-sm space-y-4">
      <a href="/Chatpage" className="text-blue-500 underline">
        Go to Chatpage
      </a>
      <a href="/login" className="text-blue-500 underline">
        Login
      </a>

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </div>
  );
}
