"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs"; 
function Logout() {
  const router = useRouter();
  const { signOut } = useAuth(); 

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(); 
        router.push("/"); 
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    handleLogout();
  }, [router, signOut]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
