import React from "react";
import Card from "./card";
import "../styles/card.css";
import Red_notice from "../images/red notice.jpg";
import Extraction from "../images/extraction.png";
import Bird_box from "../images/bird box.png";
import Dont_look from "../images/dont look up.png";
import Glass_onion from "../images/glass onion.png";
import Adam from "../images/the adam project.png";
import Gray_man from "../images/the gray man.png";
import Mother from "../images/the mother.png";
import Heroes from "../images/we can be heroes.png";

const page = () => {
  return (
    <>
      <h3 style={{ margin: "20px", color: "#E50914" }}>Netflix Originals </h3>
     <div className="page">
      <div className="card-container">
        <Card image={Extraction} alt="" title="Extraction" />
        <Card image={Red_notice} alt="" title="Red Notice" />
        <Card image={Bird_box} alt="" title="Bird Box" />
        <Card image={Dont_look} alt="" title="Don't Look Up" />
        <Card image={Glass_onion} alt="" title="Glass Onion: A Knives Out Mystery" />
        <Card image={Mother} alt="" title="The Mother" />
        <Card image={Heroes} alt="" title="We Can Be Heroes" />
        <Card image={Gray_man} alt="" title="The Gray Man" />
        <Card image={Adam} alt="" title="The Adam Project" />
       
      </div>
      
      </div>
      <h3 style={{ margin: "20px", color: "#E50914" }}>Trending Now </h3>
      <div className="page2">
     
    

      <div className="card-container2">
      <Card image={Adam} alt="" title="The Adam Project" />
      <Card image={Gray_man} alt="" title="The Gray Man" />
      <Card image={Heroes} alt="" title="We Can Be Heroes" />
      <Card image={Glass_onion} alt="" title="Glass Onion: A Knives Out Mystery" />

      </div>
      </div>
    </>
  );
};

export default page;
