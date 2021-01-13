import React, { useState } from "react";
import PropTypes from "prop-types";

const AddBuilding = (props) => {
  const [building, setBuilding] = useState(initialFormState);
  const {
    id,
    buildingName,
    companyName,
    address,
    managerName,
    phone,
    boilersId,
    boilersTypes} = building;

  const onChange = (event) => {
    setBuilding({ ...building, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.onSubmit(building);
    event.preventDefault();
    setBuilding(initialFormState)
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
                type="text"
                name="id"
                style={{flex: '10', padding: '5px'}}
                placeholder="id"
                value={id}
                onChange={onChange}
            />
            <input
                type="text"
                name="buildingName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Building Name"
                value={buildingName}
                onChange={onChange}
            />
            <input
                type="text"
                name="companyName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Company Name"
                value={companyName}
                onChange={onChange}
            />
            <input
                type="text"
                name="address"
                style={{flex: '10', padding: '5px'}}
                placeholder="address"
                value={address}
                onChange={onChange}
            />
            <input
                type="text"
                name="managerName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Manager Name"
                value={managerName}
                onChange={onChange}
            />
            <input
                type="text"
                name="phone"
                style={{flex: '10', padding: '5px'}}
                placeholder="phone"
                value={phone}
                onChange={onChange}
            />
            <input
                type="text"
                name="boilersId"
                style={{flex: '10', padding: '5px'}}
                placeholder="boilersId"
                value={boilersId}
                onChange={onChange}
            />
            <input
                type="text"
                name="boilersTypes"
                style={{flex: '10', padding: '5px'}}
                placeholder="Boilers Types"
                value={boilersTypes}
                onChange={onChange}
            />
            <input
                type="submit"
                value="SUBMIT"
                className='submit-btn'
                style={{flex: '1'}}
            />
     
    </form>
  );
};

const initialFormState = {
    id: '',
    buildingName: '',
    companyName: '',
    address: '',
    managerName: '',
    phone: '',
    boilersId: '',
    boilersTypes: ''
};
  // PropTypes
  AddBuilding.propTypes = {
    onSubmit: PropTypes.func,
  };

export default AddBuilding;
