import React from 'react';
import PropTypes from 'prop-types';
import './AddButton.css';

const addButton = (props) => {
    return <i className = 'fas fa-plus-circle add-button' onClick = {() => props.showForm()} />;
}

// PropTypes
addButton.propTypes = {
    showForm: PropTypes.func.isRequired,
}

export default AddButton;