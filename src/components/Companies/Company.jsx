import React from "react";
//best practices
import PropTypes from "prop-types";
import "./Company.css"
import { connect } from "react-redux";
import { deleteCompany, showForm } from "../../redux/actions/companiesActions";
import { bindActionCreators } from "redux";


const Company = ({ company, deleteCompany, showForm }) => {
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
            showForm(company._id);
          }}
        />
        <i
          className="fas fa-trash"
          onClick={() => {
            deleteCompany(company._id);
          }}
        />
      </td>
    </tr>
  );
};

// PropTypes
Company.propTypes = {
  company: PropTypes.object.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCompany: (id) => dispatch(deleteCompany(id)),
//     showForm: (id) => dispatch(showForm(id)),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteCompany: deleteCompany,
      showForm: showForm,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Company);