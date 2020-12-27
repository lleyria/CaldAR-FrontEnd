import React, { useState } from "react";
import companiesMockData from "../../data/companiesMockData.json";
import CompaniesTable from "./CompaniesTable";
import CompanyForm from "./CompanyForm";
import AddButton from "./AddButton";



const Companies = () => {
    //state and hook
    const [companies, setCompanies] = useState(companiesMockData);
    const [formVisible, setFormVisible] = useState(false);    
    const [initialFormState, setInitialFormState] = useState(null);

    const showForm = (id) => {
        setFormVisible(true);
        if (id) {
            const result = companies.filter((company) => company.id === id);
            setInitialFormState(result.length !== 0 ? result[0] : null );            
        } else {            
            setInitialFormState(null);
        }
    };

    const handleSubmit = (company) =>{
        setFormVisible(false);
        if (initialFormState) {
            setCompanies(
                companies.map((element) => {
                    if(element.id === company.id) {
                        element.id = company.id 
                        element.buildings = company.buildings
                        element.boilers = company.boilers
                        element.name = company.name
                        element.email = company.email
                        element.contact = company.contact
                        element.maintenanceHours = company.maintenanceHours
                    }
                    return element;
                })
            );
        } else {
            setCompanies([...companies, company]);
        }        
    };

    const handleDeleteItem = (id) => {
        setCompanies(companies.filter((company) => company.id !== id));
    };


    return(
        <div className="Companies">
            <CompaniesTable 
                companies={companies}
                onDeleteItem={handleDeleteItem}
                onUpdateItem={showForm} 
            />

            <AddButton showForm={showForm} />
            {formVisible && (
                <CompanyForm onSubmit={handleSubmit} initialState={initialFormState} />
            )}
        </div>
    );
};

export default Companies
