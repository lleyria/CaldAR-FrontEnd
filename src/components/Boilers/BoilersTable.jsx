import React from "react";
import PropTypes from "prop-types";
import Boiler from "./Boiler";
import "./BoilersTable.css";
import { connect } from "react-redux";

const BoilersTable = ({ boilers }) => {
  return (
    <div>
      <table>
        <thead>
          <tr className="headerContainer">
            <th>Lot</th>
            <th>Company Name</th>
            <th>Boiler Type</th>
            <th>Installation Date</th>
            <th>Fabrication Date</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {boilers.map((boiler) => (
            <Boiler key={boiler.id} boiler={boiler} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BoilersTable.propTypes = {
  boilers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    boilers: state.boilersReducer.boilers,
  };
};

export default connect(mapStateToProps)(BoilersTable);
