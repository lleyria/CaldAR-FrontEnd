import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TechForm.css';
import {
    addTech,
    updTech
    } from '../../redux/actions/TechActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        event.preventDefault();
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
        <div className = 'form-container'>
            <form onSubmit = {handleSubmit}>
                <div className = 'form-title'>
                    <p>{initialState ? 'Edit Technician' : 'Add a new technician'}</p>
                </div>
                <div className="row">
                    <fieldset className="field-container">
                        <label>First Name</label>
                        <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={technician.firstName}
                        onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="field-container">
                        <label>Last Name</label>
                        <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={technician.lastName}
                        onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="field-container">
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={technician.email}
                        onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="field-container">
                        <label>Boiler Types</label>
                        <input
                        type="text"
                        name="boilersTypeId"
                        placeholder="Boilers Type"
                        value={technician.boilersTypeId}
                        onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="field-container">
                        <label>Professional Level</label>
                        <input
                        type="text"
                        name="professionalLevel"
                        placeholder="Professional Level"
                        value={technician.professionalLevel}
                        onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="field-container">
                        <label>Hour Rate</label>
                        <input
                        type="text"
                        name="hourRate"
                        placeholder="Hour Rate"
                        value={technician.hourRate}
                        onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="field-container">
                        <label>Monthly Capacity</label>
                        <input
                        type="text"
                        name="monthlyCapacity"
                        placeholder="Monthly Capacity"
                        value={technician.monthlyCapacity}
                        onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

// PropTypes

techForm.propTypes = {
    initialState: PropTypes.object.isRequired,
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
