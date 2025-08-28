import React from "react";
import BeautySalonLanding from "../components/BeautySalonLanding";
import OurServices from "../components/OurServices";

const BeautySalon: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BeautySalonLanding />
      <OurServices />
    </div>
  );
};

export default BeautySalon;