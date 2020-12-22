import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TechForm = (props) => {
    const [technician, setTechnician] = useState(initialFormState);

    const handleChange = (event) => {
        setTechnician({ ...technician, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        props.onSubmit(technician);
        event.preventDefault();
    };

    return(
        <form onSubmit = {handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type = 'text'
                    name = 'firstName'
                    placeholder = 'First Name'
                    value = {technician.firstName}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Last Name</label>
                <input
                    type = 'text'
                    name = 'lastName'
                    placeholder = 'Last Name'
                    value = {technician.lastName}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input
                    type = 'email'
                    name = 'email'
                    placeholder = 'Email'
                    value = {technician.email}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Boilers Type</label>
                <input
                    type = 'text'
                    name = 'boilersType'
                    placeholder = 'Boiler Type'
                    value = {technician.boilersType}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Professional Level</label>
                <input
                    type = 'text'
                    name = 'professionalLevel'
                    placeholder = 'Professional Level'
                    value = {technician.professionalLevel}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Hour Rate</label>
                <input
                    type = 'text'
                    name = 'hourRate'
                    placeholder = 'Hour Rate'
                    value = {technician.hourRate}
                    onChange = {handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Monthly Capacity</label>
                <input
                    type = 'text'
                    name = 'monthlyCapacity'
                    placeholder = 'Monthly Capacity'
                    value = {technician.monthlyCapacity}
                    onChange = {handleChange}
                />
            </fieldset>
            <button type="submit">Confirm</button>
        </form>
    );
};

const initialFormState = {
    id: Math.floor(Math.random() * 101),
    firstName: '',
    lastName: '',
    email: '',
    boilersType: '',
    professionalLevel: '',
    hourRate: '',
    monthlyCapacity: '',
};

TechForm.propTypes = {
    onSubmit: PropTypes.function,
}

export default TechForm;
