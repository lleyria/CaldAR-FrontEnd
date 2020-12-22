import React, { useState } from "react";
import companiesMockData from "../../data/companiesMockData.json";
import CompaniesTable from "./CompaniesTable";
import CompanyForm from "./CompanyForm";

const Companies = () => {
    //state and hook
    const [companies, setCompanies] = useState(companiesMockData);

    const handleSubmit = (company) =>{
        setCompanies([...companies, company])
    };

    return(
        <div className="Companies">
            <CompaniesTable companies={companies} />
            <CompanyForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Companies
