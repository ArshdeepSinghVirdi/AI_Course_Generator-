"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "@clerk/nextjs";

function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Perform sign out using Clerk
    const handleLogout = async () => {
      try {
        await signOut(); // Clerk sign-out method
        router.push("/"); // Redirect to the landing page
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    handleLogout();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
