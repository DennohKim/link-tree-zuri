import React from "react";
import { sociallinks } from "../data/sociallinks";
import LinkCard from "./LinkCard";

const LinkList = () => {
  const linkList = sociallinks.map((link, i) => <LinkCard key = {i} url={link.url} platform={link.platform}/>);
  return (
    <div className="my-2">{linkList}</div>

  )
};

export default LinkList;
