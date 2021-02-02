import React, { useState } from "react";
import PropTypes from "prop-types";
import { addBuilding } from "../../redux/actions/buildingsActions"
import { connect } from 'react-redux';
import Modal from "../../modal/modal"
import { Form, Field } from "react-final-form";
import {
  required,
  fullNameValidator,
  addressValidator,
  phoneValidator,
  boilerTypeValidator,
  composeValidators 
} from "../../final-form/validators"

const AddBuilding = (props) => {
  const [building, setBuilding] = useState(initialFormState);
  const [isAdding, setIsAdding] = useState(false);

  const onChange = (event) => {
    setBuilding({ ...building, [event.target.name]: event.target.value });
  };

  const cancelClick = () => {
    setOpenModal(false);
    setIsAdding(!isAdding);
  };

  const toggleAdd = () => {
    setIsAdding(!isAdding);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);

  const onSubmit = () => {
    props.addBuilding(building);
    event.preventDefault();
    setBuilding(initialFormState)
    setOpenModal(false);
    setIsAdding(!isAdding)
  };

  return isAdding ? (
    <Modal
        title="Modify Menu"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
    <Form onSubmit={onSubmit} render= {({ handleSubmit, meta, values, submitting }) => (
      <form onSubmit={handleSubmit}>
        <div>
            <Field
              name="buildingName"
              placeholder="Building Name"
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Building Name</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="companyName"
              placeholder="Company Name"
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Company Name</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="address"
              placeholder="Address"
              validate={composeValidators(required, addressValidator)}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Address</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="managerName"
              placeholder="Manager Name"
              validate={composeValidators(required, fullNameValidator)}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Manager Name</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="phone"
              placeholder="Phone"
              validate={composeValidators(required, phoneValidator)}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Phone</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="boilersId"
              placeholder="Boilers Id"
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Boilers Id</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="boilerTypes"
              placeholder="Boilers Types"
              validate={composeValidators(required, boilerTypeValidator)}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Boilers Types</label>
                  <input
                    {...input}
                    className="inputStyle"
                    placeholder={placeholder}
                    onChange={(e) => {
                        input.onChange(e);
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                  />
                  {meta.error && meta.touched && (
                    <span className="errorMsg"> {meta.error} </span>
                  )}
                </div>
              )}
            </Field>
          </div> 
          <button
              type="submit"
              className="submit-btn"
              onClick={onSubmit}
            >
              {" "}Confirm{" "}
            </button>
            <button className="del-btn" onClick={cancelClick}>
              {" "}X{" "}
            </button>
      </form>
    )} />
     </Modal>
  ) : (
    <button onClick={toggleAdd} className="add-btn">
          +
        </button>
  );
};


const initialFormState = {
    buildingName: '',
    companyName: '',
    address: '',
    managerName: '',
    phone: '',
    boilersId: '',
    boilerTypes: ''
};
  // PropTypes
  AddBuilding.propTypes = {
    addBuilding: PropTypes.func,
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addBuilding: (build) => dispatch(addBuilding(build)),
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      buildings: state.buildings,
    };
  };
  
  export default connect (mapStateToProps, mapDispatchToProps)(AddBuilding);
