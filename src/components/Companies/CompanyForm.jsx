import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./CompanyForm.css";
const CompanyForm = (props) => {

    const emptyCompany = {
        id: Math.floor(Math.random() * 101),
        name: "",
        companyName: "",
        address: "",
        managerName: "",
        phone: "",
        boilerType: "",
      };

    const [company, setCompany] = useState(emptyCompany);
  
    useEffect(() => {
      if (props.initialState) {
        handleEdit(props.initialState);
      } else {
        setCompany(emptyCompany);
      }
    }, [props.initialState]);
  
    const handleChange = (event) => {
        setCompany({ ...company, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      props.onSubmit(company);
      event.preventDefault();
    };

      const handleEdit = (companyToEdit) => {
        setCompany({
          id: companyToEdit.id,
          name: companyToEdit.name,
          companyName: companyToEdit.companyName,
          address: companyToEdit.address,
          managerName: companyToEdit.managerName,
          phone: companyToEdit.phone,
          boilerType: companyToEdit.boilerType,
        });
      };      

    
    return (
        <div className="form-container">            
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <p>{props.initialState ? "Edit company" : "Add a new company"}</p>
                </div>
                <div className="row">
                    <fieldset className="field-container">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={company.name}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="field-container">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="company name"
                            value={company.companyName}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="row">
                <fieldset className="field-container">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        value={company.address}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="field-container">
                    <label>Manager Name</label>
                    <input
                        type="text"
                        name="managerName"
                        placeholder="manager name"
                        value={company.managerName}
                        onChange={handleChange}
                    />
                </fieldset>
                </div>
                <div className="row">
                    <fieldset className="field-container">
                        <label>Phone</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="phone"
                            value={company.phone}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="field-container">
                        <label>Boiler Type</label>
                        <input
                            type="text"
                            name="boilerType"
                            placeholder="Boiler type"
                            value={company.boilerType}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
            <button type="submit">Confirm</button>
        </form>
    </div>
    );    
};



CompanyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialState: PropTypes.object.isRequired, 
}
export default CompanyForm;