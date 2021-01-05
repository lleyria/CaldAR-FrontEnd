import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    modal as modalAction,
    } from '../../redux/actions/TechActions';

const Tech = (props) => {
    const handleUpdateItem = () => {
        props.modal();
        //props.onUpdate(props.technician.id);
        // Ejecutar action, que reciba props.technician.datos
    };

    const handleDeleteItem = () => {
        //props.onDelete(props.technician.id);
    };

    return (
        <tr>
            <td>{props.technician.firstName}</td>
            <td>{props.technician.lastName}</td>
            <td>{props.technician.email}</td>
            <td>{props.technician.boilersType}</td>
            <td>{props.technician.professionalLevel}</td>
            <td>{props.technician.hourRate}</td>
            <td>{props.technician.monthlyCapacity}</td>
            <td>
                <i className = 'fas fa-pen' onClick = {handleUpdateItem} />
                <i className = 'fas fa-trash' onClick = {handleDeleteItem} />
            </td>
        </tr>
    );
};

// PropTypes
Tech.propTypes = {
    technician: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    modal: PropTypes.func
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    modal: modalAction,
}, dispatch);

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tech);