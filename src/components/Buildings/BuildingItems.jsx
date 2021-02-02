import React, { useState } from "react";
import PropTypes from "prop-types";
import { delBuilding, updateBuilding  } from "../../redux/actions/buildingsActions";
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

const BuildingItems = ({ building, delBuilding, updateBuilding }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buildingToEdit, setBuildingToEdit] = useState(building);
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = () => {
    setOpenModal(false);
    updateBuilding(buildingToEdit);
    setIsEditing(false);
  };
  const cancelClick = () => {
    setIsEditing(false);
    setBuildingToEdit(building);
    setOpenModal(false);
  };
  const toggleEdit = () => {
    setBuildingToEdit(building);
    setIsEditing(!isEditing);
    setOpenModal(true);
  };
  const {
    _id,
    buildingName,
    companyName,
    address,
    managerName,
    phone,
    boilersId,
    boilerTypes,
  } = building;

  const onChange = (e) => {
    setBuildingToEdit({...buildingToEdit, [e.target.name]:e.target.value})
  }
  return isEditing ? (
    <>
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
                      value={buildingToEdit.buildingName}
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
                      value={buildingToEdit.companyName}
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
                      value={buildingToEdit.address}
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
                      value={buildingToEdit.fullNameValidator}
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
                      value={buildingToEdit.phone}
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
                      value={buildingToEdit.boilersId}
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
                      value={buildingToEdit.boilerTypes}
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
                {" "}Cancel{" "}
              </button>
        </form>
      )} />
      
    
      </Modal> 
    </>
  ) : (
    <div className="box">
      <ul>
        <li className="id-column">{_id}</li>
        <li>{buildingName}</li>
        <li>{companyName}</li>
        <li>{address}</li>
        <li>{managerName}</li>
        <li>{phone}</li>
        <li className="id-column">{boilersId}</li>
        <li className="id-column">{boilerTypes}</li>
        <button onClick={() => delBuilding(_id)} className="del-btn">
          X
        </button>
        <button onClick={toggleEdit} className="modify-btn">
          M
        </button>
      </ul>
    </div>
  );
};

// PropTypes
BuildingItems.propTypes = {
  building: PropTypes.object.isRequired,
  delBuilding: PropTypes.func,
  onClick: PropTypes.func,
  updateBuilding: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delBuilding: (id) => dispatch(delBuilding(id)),
    updateBuilding: (build) => dispatch(updateBuilding(build)),

  };
};

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings,
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(BuildingItems);