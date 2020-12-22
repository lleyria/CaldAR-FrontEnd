import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BoilerForm.css"

class BoilerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 101),
      lot: "",
      companyName: "",
      boilerType: "",
      installationDate: "",
      fabricationDate: "",
      expirationDate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.initialState) {
      this.handleEdit(this.props.initialState);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isEditing &&
      this.props.initialState !== prevProps.initialState
    ) {
      this.handleEdit(this.props.initialState);
    }
  }

  handleEdit(boilerToEdit) {
    this.setState({
      id: boilerToEdit.id,
      lot: boilerToEdit.lot,
      companyName: boilerToEdit.companyName,
      boilerType: boilerToEdit.boilerType,
      installationDate: boilerToEdit.installationDate,
      fabricationDate: boilerToEdit.fabricationDate,
      expirationDate: boilerToEdit.expirationDate,
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <fieldset className="field-container">
            <label>Lot</label>
            <input
              type="text"
              name="lot"
              placeholder="Lot"
              value={this.state.lot}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Boiler Type</label>
            <input
              type="text"
              name="boilerType"
              placeholder="Boiler Type"
              value={this.state.boilerType}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Installation Date</label>
            <input
              type="date"
              name="installationDate"
              placeholder="Installation Date"
              value={this.state.installationDate}
              onChange={this.handleChange}
            />
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="field-container">
            <label>Fabrication Date</label>
            <input
              type="date"
              name="fabricationDate"
              placeholder="Fabrication Date"
              value={this.state.fabricationDate}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="field-container">
            <label>Expiration Date</label>
            <input
              type="date"
              name="expirationDate"
              placeholder="Expiration Date"
              value={this.state.expirationDate}
              onChange={this.handleChange}
            />
          </fieldset>
        </div>
        <button type="submit">Confirm</button>
      </form>
    );
  }
}

// PropTypes
BoilerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default BoilerForm;
