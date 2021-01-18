import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TechForm.css';
import {
    addTech,
    updTech
    } from '../../redux/actions/TechActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';

const techForm = ({ addTech, updTech, initialState }) => {
    const emptyTechnician = {
        _id: Math.floor(Math.random() * 101),
        firstName: '',
        lastName: '',
        email: '',
        boilersTypeId: '',
        professionalLevel: '',
        hourRate: '',
        monthlyCapacity: '',
    };

    const [technician, setTechnician] = useState(emptyTechnician);

    useEffect(() => {
        if(initialState) {
            handleEdit(initialState);
        } else {
            setTechnician(emptyTechnician);
        }
    }, [initialState]);

    const handleChange = (event) => {
        setTechnician({ ...technician, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        if (initialState) {
            updTech(technician);
        } else {
            addTech(technician);
        }
        //event.preventDefault();
    };

    const handleEdit = (techToEdit) => {
        setTechnician({
            _id: techToEdit._id,
            firstName: techToEdit.firstName,
            lastName: techToEdit.lastName,
            email: techToEdit.email,
            boilersTypeId: techToEdit.boilersTypeId,
            professionalLevel: techToEdit.professionalLevel,
            hourRate: techToEdit.hourRate,
            monthlyCapacity: techToEdit.monthlyCapacity,
        });
    };

    return(
        <Form
            onSubmit = {handleSubmit}
            render = {({ handleSubmit }) => (
                <div className = 'form-container'>
                    <form onSubmit = {handleSubmit}>
                        <div className = 'form-title'>
                            <p>{initialState ? 'Edit Technician' : 'Add a new technician'}</p>
                        </div>
                        <div className = 'row'>
                            <label>First Name</label>
                            <Field
                                className = 'field-container'
                                name = 'firstName'
                                component = 'input'
                                type = 'text'
                                placeholder = 'First Name'
                            />
                            <label>Last Name</label>
                            <Field
                                className = 'field-container'
                                name = 'lastName'
                                component = 'input'
                                type = 'text'
                                placeholder = 'Last Name'
                            />
                        </div>
                        <div className = 'row'>
                            <label>Email</label>
                            <Field
                                className = 'field-container'
                                name = 'email'
                                component = 'input'
                                type = 'text'
                                placeholder = 'email'
                            />
                            <label>Boilers Type</label>
                            <Field
                                className = 'field-container'
                                name = 'boilersTypeId'
                                component = 'input'
                                type = 'text'
                                placeholder = 'Boilers Type'
                            />
                        </div>
                        <div className = 'row'>
                            <label>Professional Level</label>
                            <Field
                                className = 'field-container'
                                name = 'professionalLevel'
                                component = 'input'
                                type = 'text'
                                placeholder = 'Professional Level'
                            />
                            <label>Hour Rate</label>
                            <Field
                                className = 'field-container'
                                name = 'hourRate'
                                component = 'input'
                                type = 'text'
                                placeholder = 'Hour Rate'
                            />
                        </div>
                        <div className = 'row'>
                            <label>Monthly Capacity</label>
                            <Field
                                className = 'field-container'
                                name = 'monthlyCapacity'
                                component = 'input'
                                type = 'text'
                                placeholder = 'Monthly Capacity'
                            />
                        </div>
                        <button type='submit'>Confirm</button>
                    </form>
                </div>
            )}
        />
    );
};

// PropTypes

techForm.propTypes = {
    initialState: PropTypes.object,
    addTech: PropTypes.func.isRequired,
    updTech: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTech: addTech,
        updTech: updTech,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        initialState: state.techReducer.initialFormState,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(techForm);
