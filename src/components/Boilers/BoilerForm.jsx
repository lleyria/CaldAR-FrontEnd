import React, { useState } from "react";

const BoilerForm = (props) => {
  const [boiler, setBoiler] = useState(initialFormState);

  const handleChange = (event) => {
    setBoiler({ ...boiler, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.onSubmit(boiler);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Lot</label>
        <input
          type="text"
          name="lot"
          placeholder="Lot"
          value={boiler.lot}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={boiler.companyName}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label>Boiler Type</label>
        <input
          type="text"
          name="boilerType"
          placeholder="Boiler Type"
          value={boiler.boilerType}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label>Installation Date</label>
        <input
          type="date"
          name="installationDate"
          placeholder="Installation Date"
          value={boiler.installationDate}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label>Fabrication Date</label>
        <input
          type="date"
          name="fabricationDate"
          placeholder="Fabrication Date"
          value={boiler.fabricationDate}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label>Expiration Date</label>
        <input
          type="date"
          name="expirationDate"
          placeholder="Expiration Date"
          value={boiler.expirationDate}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">Confirm</button>
    </form>
  );
};

const initialFormState = {
  id: Math.floor(Math.random() * 101),
  lot: "",
  companyName: "",
  boilerType: "",
  installationDate: "",
  fabricationDate: "",
  expirationDate: "",
};

export default BoilerForm;
