import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Boiler from "./Boiler";
import "./BoilersTable.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBoilers } from "../../redux/actions/boilersActions";

const BoilersTable = ({ boilers, getBoilers }) => {
  useEffect(() => {
    getBoilers();
  }, [getBoilers]);

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
  getBoilers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilers: getBoilers,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    boilers: state.boilersReducer.boilers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilersTable);
