import React from 'react';
//best practices
import PropTypes from "prop-types";
//As a function to implement hooks
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Company = (props) => {
    const handleUpdateItem = () => {
        props.onUpdate(props.company.id);
      };
    
      const handleDeleteItem = () => {
        props.onDelete(props.company.id);
      };
    return (
        <tr>
            <td>{props.company.buildings}</td>
            <td>{props.company.boilers}</td>
            <td>{props.company.name}</td>
            <td>{props.company.email}</td>
            <td>{props.company.contact}</td>
            <td>{props.company.maintenanceHours}</td>
            <td>
                <i className="fas fa-pen"  onClick={handleUpdateItem}/>
                <i className="fas fa-trash" onClick={handleDeleteItem}/>
            </td>
        </tr>
    );
};


// PropTypes
Company.propTypes = {
    company: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

export default Company;