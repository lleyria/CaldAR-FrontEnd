import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delTech, showForm } from '../../redux/actions/TechActions';

const Tech = ({ technician, delTech, showForm }) => {

    return (
        <tr>
            <td>{technician.firstName}</td>
            <td>{technician.lastName}</td>
            <td>{technician.email}</td>
            <td>{technician.boilersType}</td>
            <td>{technician.professionalLevel}</td>
            <td>{technician.hourRate}</td>
            <td>{technician.monthlyCapacity}</td>
            <td>
                <i className = 'fas fa-pen' onClick = {() => { showForm(technician._id); }} />
                <i className = 'fas fa-trash' onClick = {() => { delTech(technician._id); }} />
            </td>
        </tr>
    );
};

// PropTypes
Tech.propTypes = {
    technician: PropTypes.object.isRequired,
    delTech: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {return bindActionCreators({
    delTech: delTech,
    showForm: showForm,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tech);