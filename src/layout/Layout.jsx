import React from 'react';
import MainContainer from '../components/MainContainer';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return(
        <div>
            <div>
                Left Bar
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