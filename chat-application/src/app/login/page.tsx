"use client";
import { useState, useEffect  } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
    const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) console.error(error);
    else alert("Check your email for the login link!");
  };
    // if (supabase.auth.user()) {
    //     // Redirect to the chat view if already logged in
    //     window.location.href = "/chat";
    // }

//      useEffect(() => {
//     const checkSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         router.push("/Chatpage"); // Redirect to chat page if session exists
//       }
//     };

//     checkSession();

//     // 🔁 Optionally listen for auth state changes
//     const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
//       if (session) {
//         router.push("/login");
//       }
//     });

//     return () => {
//       listener?.subscription.unsubscribe();
//     };
//   }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button onClick={handleLogin} className="w-full bg-green-500 text-white py-2 rounded">
          Send Login Link
        </button>
      </div>
    </div>
  );
}
