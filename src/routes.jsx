import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Companies from "./components/Companies/Companies";
import BuildingsPage from "./pages/BuildingsPage";
import Boilers from "./components/Boilers/Boilers";
import BoilersType from "./components/BoilersType/BoilersType";
import Technicians from "./components/Technicians/Technicians";
import { connect } from 'react-redux';
import { setAuthentication } from "./redux/actions/authActions";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import App from "./App"


const Routes = ({ authenticated }) => {


    return authenticated ? (
        
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route exact path="/customers/buildings" component={BuildingsPage} />
          <Route exact path="/customers/companies">
            <Layout>
              <Companies />
            </Layout>
          </Route>
          <Route exact path="/boiler/boilers">
            <Layout>
              <Boilers />
            </Layout>
          </Route>
          <Route exact path="/boiler/boilerstype">
            <Layout>
              <BoilersType />
            </Layout>
          </Route>
          <Route exact path="/technicians">
            <Layout>
              <Technicians />
            </Layout>
          </Route>
        </Switch>
      ) : (
          <App />
      )
}

// PropTypes
Routes.propTypes = {
    authenticated: PropTypes.boolean,
  }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setAuthentication,
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.authReducer.authenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
