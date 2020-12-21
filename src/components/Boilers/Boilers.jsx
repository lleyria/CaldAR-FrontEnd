import React, { useState } from "react";
import boilersMockData from "../../data/boilersMockData.json";
import BoilersTable from "./BoilersTable";

const Boilers = () => {
  const [boilers, setBoilers] = useState(boilersMockData);

  setBoilers

  return (
    <div className="Boilers">
      <BoilersTable boilers={boilers} />
    </div>
  );
};

export default Boilers;
