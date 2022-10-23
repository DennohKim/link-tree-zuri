import React from "react";
import { Github, Slack } from "../assets/images";
import { sociallinks } from "../data/sociallinks";
import LinkCard from "./LinkCard";

const LinkList = () => {
  const linkList = sociallinks.map((link, i) => (
    <LinkCard key={i} id={link.id} url={link.url} platform={link.platform} />
  ));
  return (
    <div className="my-2">
      {linkList}
      <div className="flex justify-center py-8 gap-4 ">
        <div >
          <img src={Slack} alt="slack logo" />
        </div>
        <div>
          <img src={Github} alt="slack logo" />
        </div>
      </div>
    </div>
  );
};

export default LinkList;
