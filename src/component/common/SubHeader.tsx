import React from "react";
import homePageImage from "../../assets/home-page_02-10.jpg";
interface Props {
  title: string;
}

function SubHeader({ title }: Props) {
  return (
    <div
      className="bg]"
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default SubHeader;
