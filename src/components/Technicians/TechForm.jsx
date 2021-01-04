import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TechForm.css';
import { addTech } from '../../redux/actions';
import { connect } from 'react-redux';

const techForm = (props) => {
    const [technician, setTechnician] = useState(emptyTechnician);

    useEffect(() => {
        if(props.initialState) {
            handleEdit(props.initialState);
        } else {
            setTechnician(emptyTechnician);
        }
    }, [props.initialState]);

    const handleChange = (event) => {
        setTechnician({ ...technician, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        props.onSubmit(technician);
        event.preventDefault();
    };

    const handleEdit = (techToEdit) => {
        setTechnician({
            id: techToEdit.id,
            firstName: techToEdit.firstName,
            lastName: techToEdit.lastName,
            email: techToEdit.email,
            boilersType: techToEdit.boilersType,
            professionalLevel: techToEdit.professionalLevel,
            hourRate: techToEdit.hourRate,
            monthlyCapacity: techToEdit.monthlyCapacity,
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className = 'row'>
                <fieldset className = 'field-container'>
                    <label>First Name</label>
                    <input
                        type = 'text'
                        name = 'firstName'
                        placeholder = 'First Name'
                        value = {technician.firstName}
                        onChange = {handleChange}
                    />
                </fieldset>
                <fieldset className = 'field-container'>
                    <label>Last Name</label>
                    <input
                        type = 'text'
                        name = 'lastName'
                        placeholder = 'Last Name'
                        value = {technician.lastName}
                        onChange = {handleChange}
                    />
                </fieldset>
            </div>
            <div className = 'row'>
                <fieldset className = 'field-container'>
                    <label>Email</label>
                    <input
                        type = 'email'
                        name = 'email'
                        placeholder = 'Email'
                        value = {technician.email}
                        onChange = {handleChange}
                    />
                </fieldset>
                <fieldset className = 'field-container'>
                    <label>Boilers Type</label>
                    <input
                        type = 'text'
                        name = 'boilersType'
                        placeholder = 'Boilers Type'
                        value = {technician.boilersType}
                        onChange = {handleChange}
                    />
                </fieldset>
            </div>
            <div className = 'row'>
                <fieldset className = 'field-container'>
                    <label>Professional Level</label>
                    <input
                        type = 'text'
                        name = 'professionalLevel'
                        placeholder = 'Professional Level'
                        value = {technician.professionalLevel}
                        onChange = {handleChange}
                    />
                </fieldset>
                <fieldset className = 'field-container'>
                    <label>Hour Rate</label>
                    <input
                        type = 'text'
                        name = 'hourRate'
                        placeholder = 'Hour Rate'
                        value = {technician.hourRate}
                        onChange = {handleChange}
                    />
                </fieldset>
            </div>
            <div className = 'row'>
                <fieldset className = 'field-container'>
                    <label>Monthly Capacity</label>
                    <input
                        type = 'text'
                        name = 'monthlyCapacity'
                        placeholder = 'Monthly Capacity'
                        value = {technician.monthlyCapacity}
                        onChange = {handleChange}
                    />
                </fieldset>
            </div>
            <button type = 'submit'>Confirm</button>
        </form>
    );
};

const emptyTechnician = {
    id: Math.floor(Math.random() * 101),
    firstName: '',
    lastName: '',
    email: '',
    boilersType: '',
    professionalLevel: '',
    hourRate: '',
    monthlyCapacity: '',
};

// PropTypes

techForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialState: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        techForm: (tech) => dispatch(addTech(tech)),
    };
};

const mapStateToProps = (state) => {
    return {
        technicians: state.technicians,
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(techForm);
