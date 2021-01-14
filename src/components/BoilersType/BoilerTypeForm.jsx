import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BoilerTypeForm.css";

const BoilerTypeForm = (props) => {
  const emptyBoilerType = {
    id: Math.floor(Math.random() * 101),
    description: "",
    type: "",
    maxCapacity: "",
    temperatureRange: "",
    weight: "",
    monthlyMaintenanceTime: "",
  };

  const [boilerType, setBoilerType] = useState(emptyBoilerType);

  useEffect(() => {
    if (props.initialState) {
      handleEdit(props.initialState);
    } else {
      setBoilerType(emptyBoilerType);
    }
  }, [props.initialState]);

  const handleChange = (event) => {
    setBoilerType({ ...boilerType, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.onSubmit(boilerType);
    event.preventDefault();
  };

  const handleEdit = (boilerTypeToEdit) => {
    setBoilerType({
      id: boilerTypeToEdit.id,
      description: boilerTypeToEdit.description,
      type: boilerTypeToEdit.type,
      maxCapacity: boilerTypeToEdit.maxCapacity,
      temperatureRange: boilerTypeToEdit.temperatureRange,
      weight: boilerTypeToEdit.weight,
      monthlyMaintenanceTime: boilerTypeToEdit.monthlyMaintenanceTime,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <p>
            {props.initialState ? "Edit boilerType" : "Add a new boilerType"}
          </p>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={boilerType.description}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Type</label>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={boilerType.type}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Max Capacity [liters]</label>
            <input
              type="number"
              name="maxCapacity"
              placeholder="Max Capacity"
              value={boilerType.maxCapacity}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Temperature Range [°C]</label>
            <input
              type="text"
              name="temperatureRange"
              placeholder="Temperature Range"
              value={boilerType.temperatureRange}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Weight [Kg]</label>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              value={boilerType.weight}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Monthly Maintenance Time [hours]</label>
            <input
              type="text"
              name="monthlyMaintenanceTime"
              placeholder="Monthly Maintenance Time"
              value={boilerType.monthlyMaintenanceTime}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

// PropTypes
BoilerTypeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object,
};

export default BoilerTypeForm;
