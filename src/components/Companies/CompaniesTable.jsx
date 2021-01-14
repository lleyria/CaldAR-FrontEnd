import React, { useEffect } from "react";
import PropTypes from "prop-types";
import  Company from "./Company";
import "./CompaniesTable.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCompanies } from "../../redux/actions/companiesActions"

const CompaniesTable = ({ companies, getCompanies }) => {
    useEffect(() => {
        getCompanies();
    }, [getCompanies]);

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
    getCompanies: PropTypes.func.isRequired,    
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getCompanies: getCompanies,
      },
      dispatch
    );
  };

const mapStateToProps = (state) => {
    return {
      companies: state.companiesReducer.companies,
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CompaniesTable);
