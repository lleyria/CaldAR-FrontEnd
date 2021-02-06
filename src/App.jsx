import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import Modal from "./modal/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Field } from "react-final-form";
import {
  required
} from "./final-form/validators";
import { loginWithFirebase } from './redux/actions/authActions';
import PropTypes from "prop-types"

const App = ({loginWithFirebase}) => {
    const [openModal, setOpenModal] = useState(false);
    const [isLogged, toggleLogin] = useState(false);
    
    const onSubmitLogin = (values) => {
            toggleLogin(!isLogged);
            setOpenModal(false);
            loginWithFirebase(values);
          };

    return isLogged ? (
        
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        
    ) : (
        <>
        <button onClick={() => setOpenModal(true)}>
        Login
        </button>
        <Modal
        title="Modify Menu"
        openModal={openModal}
        setOpenModal={setOpenModal}
        >
        <Form onSubmit={onSubmitLogin} render= {({ handleSubmit, meta, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
              <Field
                name="email"
                placeholder="email"
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Email</label>
                    <input
                      {...input}
                      className="inputStyle"
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className="errorMsg"> {meta.error} </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="password"
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Password</label>
                    <input
                      {...input}
                      className="inputStyle"
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className="errorMsg"> {meta.error} </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <button
                type="submit"
                className="submit-btn"
              >
                {" "}Confirm{" "}
              </button>
              <button className="del-btn" onClick={() => setOpenModal(false)}>
                {" "}X{" "}
              </button>
        </form>
      )} /> 
        </Modal>
        </>
    )
}

// PropTypes
App.propTypes = {
  loginWithFirebase: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginWithFirebase,
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(App);