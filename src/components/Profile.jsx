import React from "react";
import { ProfilePic } from "../assets/images";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10">
      <div id = "profile__img">
        <img src={ProfilePic} alt="profile picture" />
      </div>
      <h1 id="twitter" className="font-bold">Annette Black</h1>
      <h2 id="slack" className="hidden">Annette</h2>
    </div>
  );
};

export default Profile;
