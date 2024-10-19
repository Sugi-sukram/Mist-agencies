import React from "react";
import TitleBG from "../../assets/TitleBG.png";
interface Props {
  title: string;
}

function SubHeader({ title }: Props) {
  return (
    <div
      className="bg-bluecolor text-center py-20 relative bg-cover bg-center h-[150px] mb-10 p-5 bg-no-repeat text-white flex flex-col justify-center "
      style={{
        backgroundImage: `url(${TitleBG.src})`,
      }}
    >
      <h2 className="text-5xl pl-16 font-bold text-[#082763] text-left ">
        {title}
      </h2>
    </div>
  );
}

export default SubHeader;
