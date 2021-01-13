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
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Manager Name</th>
                        <th>Phone</th>
                        <th>Boiler type</th>
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
