import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BoilerForm.css";
import { addBoiler, updateBoiler } from "../../redux/actions/boilersActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const BoilerForm = ({ addBoiler, updateBoiler, initialState }) => {
  const emptyBoiler = {
    // _id: Math.floor(Math.random() * 101),
    lot: "",
    companyName: "",
    boilersTypeId: "",
    installationDate: "",
    fabricationDate: "",
    expirationDate: "",
  };

  const [boiler, setBoiler] = useState(emptyBoiler);

  useEffect(() => {
    if (initialState) {
      handleEdit(initialState);
    } else {
      setBoiler(emptyBoiler);
    }
  }, [initialState]);

  const handleChange = (event) => {
    setBoiler({ ...boiler, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (initialState) {
      updateBoiler(boiler);
    } else {
      addBoiler(boiler);
    }
    event.preventDefault();
  };

  const handleEdit = (boilerToEdit) => {
    setBoiler({
      _id: boilerToEdit._id,
      lot: boilerToEdit.lot,
      companyName: boilerToEdit.companyName,
      boilersTypeId: boilerToEdit.boilersTypeId,
      installationDate: boilerToEdit.installationDate
        ? boilerToEdit.installationDate.split("T")[0]
        : "",
      fabricationDate: boilerToEdit.fabricationDate.split("T")[0],
      expirationDate: boilerToEdit.expirationDate.split("T")[0],
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <p>{initialState ? "Edit boiler" : "Add a new boiler"}</p>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Lot</label>
            <input
              type="text"
              name="lot"
              placeholder="Lot"
              value={boiler.lot}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={boiler.companyName}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Boiler Type</label>
            <input
              type="text"
              name="boilersTypeId"
              placeholder="Boiler Type"
              value={boiler.boilersTypeId}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Installation Date</label>
            <input
              type="date"
              name="installationDate"
              placeholder="Installation Date"
              value={boiler.installationDate}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Fabrication Date</label>
            <input
              type="date"
              name="fabricationDate"
              placeholder="Fabrication Date"
              value={boiler.fabricationDate}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Expiration Date</label>
            <input
              type="date"
              name="expirationDate"
              placeholder="Expiration Date"
              value={boiler.expirationDate}
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
BoilerForm.propTypes = {
  initialState: PropTypes.object,
  addBoiler: PropTypes.func.isRequired,
  updateBoiler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addBoiler: addBoiler,
      updateBoiler: updateBoiler,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    initialState: state.boilersReducer.initialFormState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerForm);
