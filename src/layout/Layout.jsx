import React from 'react';
import SideBar from './Sidebar';
import MainContainer from '../components/MainContainer';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return(
        <div>
            <div>
                <SideBar width = {300} height = {'100vh'}>
                    <h1>Administrators</h1>
                    <h1>Clients</h1>
                    <h1>Technicians</h1>
                    <h1>Boilers</h1>
                    <h1>Appoiments</h1>
                    <h1>Reports</h1>
                </SideBar>
            </div>
            <div>
                Top Bar
            </div>
            <MainContainer container={children}></MainContainer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;