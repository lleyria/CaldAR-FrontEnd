import React from 'react';
//best practices
import PropTypes from "prop-types";
//As a function to implement hooks
const Company = (props) => {
    return (
        <tr>
            <td>{props.company.buildings}</td>
            <td>{props.company.boilers}</td>
            <td>{props.company.name}</td>
            <td>{props.company.email}</td>
            <td>{props.company.contact}</td>
            <td>{props.company.maintenanceHours}</td>
            <td>
                <i className="fas fa-pen" />
                <i className="fas fa-trash" />
            </td>
        </tr>
    );
};


// PropTypes
Company.propTypes = {
    company: PropTypes.object.isRequired,
  };

export default Company;