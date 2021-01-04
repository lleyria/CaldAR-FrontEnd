import React from "react";
import PropTypes from "prop-types";
import  Company from "./Company";
import "./CompaniesTable.css";
import { connect } from "react-redux";

const CompaniesTable = ({ companies }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr className="headerContainer">
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Manager Name</th>
                        <th>Phone</th>
                        <th>Boiler type</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <Company 
                            key = {company.id} 
                            company={company}                            
                         />
                    ))}
                </tbody>
            </table>    
        </div>
    );
};

//PropTypes
CompaniesTable.propTypes = {
    companies: PropTypes.array.isRequired,    
};

const mapStateToProps = (state) => {
    return {
      companies: state.companiesReducer.companies,
    };
  };

  export default connect(mapStateToProps, null)(CompaniesTable);
