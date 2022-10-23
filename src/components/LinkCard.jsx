import React from "react";

const LinkCard = ({ url, platform, id}) => {
  return (
    <div className="grid grid-col-1 items-center w-full gap-4 ">
      <a
        id={id}
        className="font-medium py-4 my-2  text-center bg-slate-200 rounded-md"
        href={url}
      >
        {platform}
      </a>
    </div>
  );
};

export default LinkCard;
