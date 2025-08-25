import React from "react";
 import Introduction from "../components/Introduction";
 import Abouts from "../components/Abouts";
 import CompanyProfile from "../components/CompanyProfile";

const About = () => {
  return (
    <div>
      <Introduction />
      <Abouts/>
      
      <CompanyProfile/>
    </div>
  );
};

export default About;
