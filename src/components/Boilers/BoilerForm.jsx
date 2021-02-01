import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./BoilerForm.css";
import { addBoiler, updateBoiler } from "../../redux/actions/boilersActions";
import { closeModal } from "../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Field } from "react-final-form";
import TextInput from "./TextInput";
import {
  required,
  boilerTypeValidator,
  composeValidators,
  dateValidator,
  lotValidator,
} from "../../final-form/validators";

const BoilerForm = ({ addBoiler, updateBoiler, initialState }) => {
  const emptyBoiler = {
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
      handleEdit();
    } else {
      setBoiler(emptyBoiler);
    }
  }, [initialState]);

  const handleEdit = () => {
    setBoiler({
      _id: initialState._id,
      lot: initialState.lot,
      companyName: initialState.companyName,
      boilersTypeId: initialState.boilersTypeId,
      installationDate: initialState.installationDate
        ? initialState.installationDate.split("T")[0]
        : "",
      fabricationDate: initialState.fabricationDate.split("T")[0],
      expirationDate: initialState.expirationDate.split("T")[0],
    });
  };

  const handleSubmit = (values) => {
    if (initialState) {
      updateBoiler(values);
    } else {
      addBoiler(values);
      closeModal();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={boiler}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <p>{initialState ? "Edit boiler" : "Add a new boiler"}</p>
          </div>
          <div className="row">
            <fieldset className="field-container">
              <Field
                type="text"
                name="lot"
                placeholder="Lot"
                component={TextInput}
                label="Lot"
                validate={composeValidators(required, lotValidator)}
              />
            </fieldset>
            <fieldset className="field-container">
              <Field
                type="text"
                name="companyName"
                placeholder="Company Name"
                component={TextInput}
                label="Company Name"
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="field-container">
              <Field
                type="text"
                name="boilersTypeId"
                placeholder="Boiler Type"
                component={TextInput}
                label="Boiler Type"
                validate={composeValidators(required, boilerTypeValidator)}
              />
            </fieldset>
            <fieldset className="field-container">
              <Field
                type="date"
                name="installationDate"
                placeholder="Installation Date"
                component={TextInput}
                label="Installation Date"
                validate={dateValidator}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="field-container">
              <Field
                type="date"
                name="fabricationDate"
                placeholder="Fabrication Date"
                component={TextInput}
                label="Fabrication Date"
                validate={composeValidators(required, dateValidator)}
              />
            </fieldset>
            <fieldset className="field-container">
              <Field
                type="date"
                name="expirationDate"
                placeholder="Expiration Date"
                component={TextInput}
                label="Expiration Date"
                validate={composeValidators(required, dateValidator)}
              />
            </fieldset>
          </div>
          <button type="submit" disabled={submitting || pristine}>
            Confirm
          </button>
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </form>
      )}
    />
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
      closeModal: closeModal,
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
