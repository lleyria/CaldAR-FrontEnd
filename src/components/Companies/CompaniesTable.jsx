import React from "react";
import PropTypes from "prop-types";
import  Company from "./Company";
import "./CompaniesTable.css";

const CompaniesTables = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr className="container">
                        <th>name</th>
                        <th>companyName</th>
                        <th>address</th>
                        <th>managerName</th>
                        <th>phone</th>
                        <th>boilerType</th>
                    </tr>
                </thead>
                <tbody>
                    {props.companies.map((company) => (
                        <Company 
                            key = {company.id} 
                            company={company}
                            onDelete={props.onDeleteItem}
                            onUpdate={props.onUpdateItem} 
                         />
                    ))}
                </tbody>
            </table>    
        </div>
    );
};

//PropTypes
CompaniesTables.propTypes = {
    companies: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
};

export default CompaniesTables
