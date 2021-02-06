import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Companies from "./components/Companies/Companies";
import BuildingsPage from "./pages/BuildingsPage";
import Boilers from "./components/Boilers/Boilers";
import BoilersType from "./components/BoilersType/BoilersType";
import Technicians from "./components/Technicians/Technicians";
import { connect } from 'react-redux';
import { setAuthentication } from "./redux/actions/authActions";
import { tokenListener } from "./firebase";
import { bindActionCreators } from 'redux'


const Routes = ({ authenticated, setAuthentication }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthentication();
    }
  }, [setAuthentication]);

  useEffect(() => {
    tokenListener();
  }, []);
  console.log("auth:", authenticated)
  if (authenticated) {
      
    return (
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
    );
  }
};

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
