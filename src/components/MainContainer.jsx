import React from 'react';
import PropTypes from 'prop-types';

const MainContainer = ({container}) => (
    <div>
        <div>{container}</div>
    </div>
)

MainContainer.propTypes = {
    container: PropTypes.node
};

export default MainContainer;