import React from 'react';
//best practices
import PropTypes from "prop-types";
import "./Company.css"
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
            <td>{props.company.name}</td>
            <td>{props.company.companyName}</td>
            <td>{props.company.address}</td>
            <td>{props.company.managerName}</td>
            <td>{props.company.phone}</td>
            <td>{props.company.boilerType}</td>
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