import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <>
      <Image
        src={src}
        className="rounded-full"
        width={50}
        height={50}
        alt="avatar"
      />
    </>
  );
};

export default Avatar;
