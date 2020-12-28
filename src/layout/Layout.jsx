import React from 'react';
import SideBar from './Sidebar';
import MainContainer from '../components/MainContainer';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return(
        <div>
            <div>
                <SideBar width = {250} height = {'100vh'}>
                    <div className='caldar'>CaldAR</div>
                    <div>
                        <i className = 'fas fa-laptop'></i> Administrators
                    </div>
                    <div>
                        <i className = 'fas fa-user-friends'></i> Clients
                    </div>
                    <div>
                        <i className = 'fas fa-tools'></i> Technicians
                    </div>
                    <div>
                        <i className = 'fas fa-building'></i> Boilers
                    </div>
                    <div>
                        <i className = 'fas fa-calendar'></i> Appoiments
                    </div>
                    <div>
                        <i className='fab fa-readme'></i> Reports
                    </div>
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