import React, { useState } from "react";
import PropTypes from 'prop-types';
const CompanyForm = (props) => {
    const [company, setCompany] = useState(initialFormState);

    const handleChange = (event) => {
        setCompany({ ...company, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        props.onSubmit(company);
        event.preventDefault();
      };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Buildings</label>
                <input
                    type="text"
                    name="buildings"
                    placeholder="buildings"
                    value={company.buildings}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Boilers</label>
                <input
                    type="text"
                    name="boilers"
                    placeholder="boilers"
                    value={company.boilers}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={company.name}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={company.email}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Contact</label>
                <input
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    value={company.contact}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>maintenanceHours</label>
                <input
                    type="number"
                    name="maintenanceHours"
                    placeholder="Maintenance Hours"
                    value={company.expirationDate}
                    onChange={handleChange}
                />
            </fieldset>
      <button type="submit">Confirm</button>
    </form>
    );
};

const initialFormState = {
    id: Math.floor(Math.random()*101),
    buildings: "",
    boilers: "",
    name: "",
    email: "",
    contact: "",
    maintenanceHours: ""   
};

CompanyForm.propTypes = {
    onSubmit: PropTypes.function,
}
export default CompanyForm;