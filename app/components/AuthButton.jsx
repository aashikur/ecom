"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Image from "next/image";

const AuthButton = ({ className = "" }) => {
    const { data: session, status } = useSession();

    if( session && status === "loading") return <div>Loading...</div>
    if (session) {
        return (
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    {session.user.image && (
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <Image
                                src={session?.user.image}
                                alt={session?.user.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <p className="text-gray-700 font-medium truncate max-w-[120px]">
                        {session.user.name}
                    </p>
                </div>
                <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300 font-medium"
                >
                    <BiLogOut className="text-lg" />
                    Logout
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn("google")}
            className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${className}`}
        >
            <FaGoogle className="text-red-500" />
            Sign in with Google
        </button>
    );
};

export default AuthButton;
