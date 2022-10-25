import Image from "next/image";
import React from "react";

type AvatarProps = {
  username: string | undefined;
  logout: () => void;
};

const Avatar = ({ username, logout }: AvatarProps) => {
  return (
    <Image
      className="bg-black rounded-full cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
      layout="fill"
      onClick={logout}
    />
  );
};

export default Avatar;
