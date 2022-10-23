import React from "react";
import Footer from "../components/Footer";
import LinkList from "../components/LinkList";
import Profile from "../components/Profile";

const Mainpage = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <Profile />
        <LinkList/>
        <Footer />
      </div>
    </div>
  );
};

export default Mainpage;
