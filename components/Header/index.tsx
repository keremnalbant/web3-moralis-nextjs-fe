import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "../Avatar";
import ChangeUsername from "../ChangeUsername";
import Image from "next/image";

const Header = () => {
  const { user, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={`https://avatars.dicebear.com/api/pixel-art/${"keremmmmmm"}.svg`}
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="lg:mx-auto border-pink-500 border-8 rounded-full relative h-48 w-48">
            <Avatar username={user?.getUsername()} logout={logOut} />
          </div>
          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user?.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
