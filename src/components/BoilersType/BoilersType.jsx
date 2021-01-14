import React, { useState } from "react";
import boilersTypeMockData from "../../data/boilersTypeMockData.json";
import BoilersTypeTable from "./BoilersTypeTable";
import BoilerTypeForm from "./BoilerTypeForm";
import AddButton from "./AddButton";

const BoilersType = () => {
  const [boilersType, setBoilersType] = useState(boilersTypeMockData);
  const [formVisible, setFormVisible] = useState(false);
  const [initialFormState, setInitialFormState] = useState(null);

  const showForm = (id) => {
    setFormVisible(true);
    if (id) {
      const result = boilersType.filter((boilerType) => boilerType.id === id);
      setInitialFormState(result.lenght !== 0 ? result[0] : null);
    } else {
      setInitialFormState(null);
    }
  };

  const handleSubmit = (boilerType) => {
    setFormVisible(false);
    if (initialFormState) {
      setBoilersType(
        boilersType.map((element) => {
          if (element.id === boilerType.id) {
            element.id = boilerType.id;
            element.description = boilerType.description;
            element.type = boilerType.type;
            element.maxCapacity = boilerType.maxCapacity;
            element.temperatureRange = boilerType.temperatureRange;
            element.weight = boilerType.weight;
            element.monthlyMaintenanceTime = boilerType.monthlyMaintenanceTime;
          }
          return element;
        })
      );
    } else {
      setBoilersType([...boilersType, boilerType]);
    }
  };

  const handleDeleteItem = (id) => {
    setBoilersType(boilersType.filter((boilerType) => boilerType.id !== id));
  };

  return (
    <div className="Boilers">
      <BoilersTypeTable
        boilersType={boilersType}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={showForm}
      />
      <AddButton showForm={showForm} />
      {formVisible && (
        <BoilerTypeForm
          onSubmit={handleSubmit}
          initialState={initialFormState}
        />
      )}
    </div>
  );
};

export default BoilersType;
