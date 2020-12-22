import React from 'react';
import PropTypes from 'prop-types';

const Technician = (props) => {
    return(
        <tr>
            <td>{props.technician.firstName}</td>
            <td>{props.technician.lastName}</td>
            <td>{props.technician.email}</td>
            <td>{props.technician.boilersType}</td>
            <td>{props.technician.professionalLevel}</td>
            <td>{props.technician.hourRate}</td>
            <td>{props.technician.monthlyCapacity}</td>
            <td>
                <i className = 'fas fa-pen' />
                <i className = 'fas fa-trash' />
            </td>
        </tr>
    );
};

// PropTypes
Technician.propTypes = {
    technician: PropTypes.object.isRequired,
};

export default Technician;