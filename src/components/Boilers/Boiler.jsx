import React from "react";
import PropTypes from "prop-types";
import "./Boiler.css";
import { connect } from "react-redux";
import { deleteBoiler, showForm } from "../../redux/actions/boilersActions";
import { bindActionCreators } from "redux";

const Boiler = ({ boiler, deleteBoiler, showForm }) => {
  return (
    <tr className="boilerRow">
      <td>{boiler.lot}</td>
      <td>{boiler.companyName}</td>
      <td>{boiler.boilersTypeId}</td>
      <td>{boiler.installationDate ? boiler.installationDate.split("T")[0] : ""}</td>
      <td>{boiler.fabricationDate ? boiler.fabricationDate.split("T")[0] : ""}</td>
      <td>{boiler.expirationDate ? boiler.expirationDate.split("T")[0] : ""}</td>
      <td className="icons">
        <i
          className="fas fa-pen"
          onClick={() => {
            showForm(boiler._id);
          }}
        />
        <i
          className="fas fa-trash"
          onClick={() => {
            deleteBoiler(boiler._id);
          }}
        />
      </td>
    </tr>
  );
};

// PropTypes
Boiler.propTypes = {
  boiler: PropTypes.object.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     delBoiler: (id) => dispatch(delBoiler(id)),
//     showForm: (id) => dispatch(showForm(id)),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteBoiler: deleteBoiler,
      showForm: showForm,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Boiler);
