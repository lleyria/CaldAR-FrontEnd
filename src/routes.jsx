import React, { Component } from 'react';
import { Route, Switch} from 'react-router';
import Layout from './layout/Layout';
import Home from './components/Home';
import Buildings from './components/Buldings';
import Companies from './components/Companies';
import Boilers from './components/Boilers';
import BoilersType from './components/BoilersType';
import Technicians from './components/Technicians';

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/'>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route exact path='/customers/buildings'>
                    <Layout>
                        <Buildings />
                    </Layout>
                </Route>
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