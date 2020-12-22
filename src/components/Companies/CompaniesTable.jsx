import React from "react";
import PropTypes from "prop-types";
import  Company from "./Company";

const CompaniesTables = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>buildings</th>
                        <th>boilers</th>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                        <th>maintenanceHours</th>
                    </tr>
                </thead>
                <tbody>
                    {props.companies.map((company) => (
                        <Company key = {company.id} company={company} />
                    ))}
                </tbody>
            </table>    
        </div>
    );
};

//PropTypes
CompaniesTables.propTypes = {
    companies: PropTypes.array.isRequired,
};

export default CompaniesTables
