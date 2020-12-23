import React, { useState } from "react";
import boilersMockData from "../../data/boilersMockData.json";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";

const Boilers = () => {
  const [boilers, setBoilers] = useState(boilersMockData);
  const [formVisible, setFormVisible] = useState(false);
  const [initialFormState, setInitialFormState] = useState(null);

  const showForm = (id) => {
    setFormVisible(true);
    if (id) {
      const result = boilers.filter((boiler) => boiler.id === id);
      setInitialFormState(result.lenght !== 0 ? result[0] : null);
    } else {
      setInitialFormState(null);
    }
  };

  const handleSubmit = (boiler) => {
    setFormVisible(false);
    if (initialFormState) {
      setBoilers(
        boilers.map((element) => {
          if (element.id === boiler.id) {
            element.id = boiler.id;
            element.lot = boiler.lot;
            element.companyName = boiler.companyName;
            element.boilerType = boiler.boilerType;
            element.installationDate = boiler.installationDate;
            element.fabricationDate = boiler.fabricationDate;
            element.expirationDate = boiler.expirationDate;
          }
          return element;
        })
      );
    } else {
      setBoilers([...boilers, boiler]);
    }
  };

  const handleDeleteItem = (id) => {
    setBoilers(boilers.filter((boiler) => boiler.id !== id));
  };

  return (
    <div className="Boilers">
      <BoilersTable
        boilers={boilers}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={showForm}
      />
      <AddButton showForm={showForm} />
      {formVisible && (
        <BoilerForm onSubmit={handleSubmit} initialState={initialFormState} />
      )}
    </div>
  );
};

export default Boilers;
