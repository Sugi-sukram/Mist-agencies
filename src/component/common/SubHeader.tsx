import React from "react";
import homePageImage from "../../assets/home-page_02-10.jpg";
interface Props {
  title: string;
}

function SubHeader({ title }: Props) {
  return (
    <div
      className="bg-bluecolor text-center py-20 relative bg-cover bg-center h-[150px] mb-10 p-5 bg-no-repeat text-white flex flex-col justify-center "
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      <h2 className="text-5xl pl-16 font-bold text-titles text-left ">{title}</h2>
    </div>
  );
}

export default SubHeader;
