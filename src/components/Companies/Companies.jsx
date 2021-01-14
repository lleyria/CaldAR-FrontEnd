import React from "react";
import PropTypes from "prop-types";
import CompaniesTable from "./CompaniesTable";
import CompanyForm from "./CompanyForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";

const Companies = ({ formVisible }) => {
    return (
      <div className="Companies">
        <CompaniesTable />
        <AddButton />
        {formVisible && <CompanyForm />}
      </div>
    );
  };
  
  Companies.propTypes = {
    formVisible: PropTypes.bool.isRequired,
  };
  
  const mapStateToProps = (state) => {
    return {
      formVisible: state.companiesReducer.formVisible,
    };
  };
  
  export default connect(mapStateToProps, null)(Companies);