import React from "react";
import PropTypes from "prop-types";
import "./Boiler.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal } from "../../redux/actions/modalActions";
import { UPDATE_BOILER, DELETE_BOILER } from "../../redux/types/modalTypes";

const Boiler = ({ boiler, showModal }) => {
  return (
    <tr className="boilerRow">
      <td>{boiler.lot}</td>
      <td>{boiler.companyName}</td>
      <td>{boiler.boilersTypeId}</td>
      <td>
        {boiler.installationDate ? boiler.installationDate.split("T")[0] : ""}
      </td>
      <td>
        {boiler.fabricationDate ? boiler.fabricationDate.split("T")[0] : ""}
      </td>
      <td>
        {boiler.expirationDate ? boiler.expirationDate.split("T")[0] : ""}
      </td>
      <td className="icons">
        <i
          className="fas fa-pen"
          onClick={() => {
            showModal(UPDATE_BOILER, { id: boiler._id });
          }}
        />
        <i
          className="fas fa-trash"
          onClick={() => {
            showModal(DELETE_BOILER, { id: boiler._id });
          }}
        />
      </td>
    </tr>
  );
};

// PropTypes
Boiler.propTypes = {
  boiler: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModal,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Boiler);
