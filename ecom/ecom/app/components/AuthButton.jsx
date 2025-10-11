"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="border px-4 py-1 rounded-full"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="border px-4 py-1 rounded-full"
    >
      Login with Google
    </button>
  );
};

export default AuthButton;
