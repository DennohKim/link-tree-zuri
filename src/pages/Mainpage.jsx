import React from "react";
import Footer from "../components/Footer";
import LinkCard from "../components/LinkCard";
import Profile from "../components/Profile";

const Mainpage = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <Profile />
        <LinkCard/>
        <Footer />
      </div>
    </div>
  );
};

export default Mainpage;
