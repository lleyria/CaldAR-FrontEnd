import React, { Component } from 'react';
import { Route, Switch} from 'react-router';
import Layout from './layout/Layout';
import Home from './components/Home';
import Companies from './components/Companies/Companies';
import BuildingsPage from './pages/BuildingsPage';
import Boilers from './components/Boilers/Boilers';
import BoilersType from './components/BoilersType/BoilersType';
import Technicians from './components/Technicians/Technicians';

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/'>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route exact path='/customers/buildings' component={BuildingsPage}  /> 
                <Route exact path='/customers/companies'>
                    <Layout>
                        <Companies />
                    </Layout>
                </Route>
                <Route exact path='/boiler/boilers'>
                    <Layout>
                        <Boilers />
                    </Layout>
                </Route>
                <Route exact path='/boiler/boilerstype'>
                    <Layout>
                        <BoilersType />
                    </Layout>
                </Route>
                <Route exact path='/technicians'>
                    <Layout>
                        <Technicians />
                    </Layout>
                </Route>
            </Switch>
        );
    }
}

export default Routes;
