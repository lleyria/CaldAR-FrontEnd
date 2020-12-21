import React, { useState } from "react";
import boilersMockData from "../../data/boilersMockData.json";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";

const Boilers = () => {
  const [boilers, setBoilers] = useState(boilersMockData);

  const handleSubmit = (boiler) => {
    setBoilers([...boilers, boiler]);
  };

  return (
    <div className="Boilers">
      <BoilersTable boilers={boilers} />
      <BoilerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Boilers;
