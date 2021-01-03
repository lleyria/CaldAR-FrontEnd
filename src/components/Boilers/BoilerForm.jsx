import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BoilerForm.css";
import { addBoiler, updateBoiler } from "../../redux/actions/boilersActions";
import { connect } from "react-redux";

const BoilerForm = ({ addBoiler, updateBoiler, initialState }) => {
  const emptyBoiler = {
    id: Math.floor(Math.random() * 101),
    lot: "",
    companyName: "",
    boilerType: "",
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
      id: boilerToEdit.id,
      lot: boilerToEdit.lot,
      companyName: boilerToEdit.companyName,
      boilerType: boilerToEdit.boilerType,
      installationDate: boilerToEdit.installationDate,
      fabricationDate: boilerToEdit.fabricationDate,
      expirationDate: boilerToEdit.expirationDate,
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
              name="boilerType"
              placeholder="Boiler Type"
              value={boiler.boilerType}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Installation Date</label>
            <input
              type="date"
              name="installationDate"
              placeholder="Installation Date"
              value={boiler.installationDate.replace(
                /(\d\d)\/(\d\d)\/(\d{4})/,
                "$3-$1-$2"
              )}
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
              value={boiler.fabricationDate.replace(
                /(\d\d)\/(\d\d)\/(\d{4})/,
                "$3-$1-$2"
              )}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Expiration Date</label>
            <input
              type="date"
              name="expirationDate"
              placeholder="Expiration Date"
              value={boiler.expirationDate.replace(
                /(\d\d)\/(\d\d)\/(\d{4})/,
                "$3-$1-$2"
              )}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoiler: (boiler) => dispatch(addBoiler(boiler)),
    updateBoiler: (boiler) => dispatch(updateBoiler(boiler)),
  };
};

const mapStateToProps = (state) => {
  return {
    initialState: state.boilersReducer.initialFormState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerForm);
