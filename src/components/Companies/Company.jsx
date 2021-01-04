import React from "react";
//best practices
import PropTypes from "prop-types";
import "./Company.css"
import { connect } from "react-redux";
import { delCompany, showForm } from "../../redux/actions/companiesActions";


const Company = ({ company, delCompany, showForm }) => {
  return (
    <tr className="companyRow">
      <td>{company.companyName}</td>
      <td>{company.address}</td>
      <td>{company.managerName}</td>
      <td>{company.phone}</td>
      <td>{company.boilerType}</td>      
      <td className="icons">
        <i
          className="fas fa-pen"
          onClick={() => {
            showForm(company.id);
          }}
        />
        <i
          className="fas fa-trash"
          onClick={() => {
            delCompany(company.id);
          }}
        />
      </td>
    </tr>
  );
};

// PropTypes
Company.propTypes = {
  company: PropTypes.object.isRequired,
  delCompany: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delCompany: (id) => dispatch(delCompany(id)),
    showForm: (id) => dispatch(showForm(id)),
  };
};

export default connect(null, mapDispatchToProps)(Company);