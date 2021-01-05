import React, { useState } from "react";
import PropTypes from "prop-types";
import { delBuilding, updateBuilding  } from "../../redux/actions/buildingsActions";
import { connect } from 'react-redux';

const BuildingItems = ({ building, delBuilding, updateBuilding }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buildingToEdit, setBuildingToEdit] = useState(building);

  const handleOnClick = () => {
    setIsEditing(false);
  }
  
  const onSubmit = () =>{
    updateBuilding(buildingToEdit);
    setIsEditing(false);
  } 
  const {
    id,
    buildingName,
    companyName,
    address,
    managerName,
    phone,
    boilersId,
    boilersTypes,
  } = building;

  const onChange = (e) => {
    setBuildingToEdit({...buildingToEdit, [e.target.name]:e.target.value})
  }
  return isEditing ? (
    <>
      <input
        readOnly
        type="text"
        name="id"
        style={{ flex: "10", padding: "5px" }}
        placeholder="id"
        value={buildingToEdit.id}
        onChange={onChange}
      />
      <input
        type="text"
        name="buildingName"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Building Name"
        value={buildingToEdit.buildingName}
        onChange={onChange}
      />
      <input
        type="text"
        name="companyName"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Company Name"
        value={buildingToEdit.companyName}
        onChange={onChange}
      />
      <input
        type="text"
        name="address"
        style={{ flex: "10", padding: "5px" }}
        placeholder="address"
        value={buildingToEdit.address}
        onChange={onChange}
      />
      <input
        type="text"
        name="managerName"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Manager Name"
        value={buildingToEdit.managerName}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        style={{ flex: "10", padding: "5px" }}
        placeholder="phone"
        value={buildingToEdit.phone}
        onChange={onChange}
      />
      <input
        type="text"
        name="boilersId"
        style={{ flex: "10", padding: "5px" }}
        placeholder="boilersId"
        value={buildingToEdit.boilersId}
        onChange={onChange}
      />
      <input
        type="text"
        name="boilersTypes"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Boilers Types"
        value={buildingToEdit.boilersTypes}
        onChange={onChange}
      />
      <button onClick={() => onSubmit()}  className="submit-btn" style={{ flex: "1" }}>submit</button>
      <button onClick={() => handleOnClick()} className="del-btn" style={{ flex: "1" }}>X</button>
    </>
  ) : (
    <div className="box">
      <ul>
        <li className="id-column">{id}</li>
        <li>{buildingName}</li>
        <li>{companyName}</li>
        <li>{address}</li>
        <li>{managerName}</li>
        <li>{phone}</li>
        <li className="short-column">{boilersId}</li>
        <li className="short-column">{boilersTypes}</li>
        <button onClick={() => delBuilding(id)} className="del-btn">
          X
        </button>
        <button onClick={() => setIsEditing(true)} className="modify-btn">
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

