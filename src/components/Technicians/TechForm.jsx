import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TechForm.css';
import {
    addTech as addTechAction,
    updTech as updTechAction
    } from '../../redux/actions/TechActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const techForm = ({ addTech, updTech }) => {
    console.log(typeof addTech, addTech);
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
    
    const [technician, setTechnician] = useState(emptyTechnician);

    useEffect(() => {
        if(techReducers) {
            handleEdit(techReducers);
        } else {
            setTechnician(emptyTechnician);
        }
    }, [techReducers]);

    const handleChange = (event) => {
        setTechnician({ ...technician, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(technician);
        if (techReducers) {
            updTech(technician);
        } else {
            addTech(technician);
        }
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
        <div className = 'form-container'>
            <form onSubmit = {handleSubmit}>
                <div className = 'form-title'>
                    <p>{techReducers ? 'Edit Technician' : 'Add a new technician'}</p>
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
                        name="boilersType"
                        placeholder="Boilers Type"
                        value={technician.boilersType}
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
    techReducers: PropTypes.object.isRequired,
    addTech: PropTypes.func.isRequired,
    updTech: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
        addTech: addTechAction,
        updTech: updTechAction
}, dispatch);

const mapStateToProps = (state) => {
    return {
        techFind: state.techReducers.techFind,
        isEditing: state.techReducers.isEditing
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(techForm);
