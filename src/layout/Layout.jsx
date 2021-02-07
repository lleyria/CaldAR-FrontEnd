import React from 'react';
import SideBar from './Sidebar';
import MainContainer from '../components/MainContainer';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signoutAction } from "../redux/actions/authActions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const Layout = ({children, signoutAction}) => {

    const handleClick = () => {
        signoutAction();
    }
    return(
        <div>
            <div>
                <SideBar width = {250} height = {'100vh'}>
                    <div className='caldar'>CaldAR</div>
                    <div>
                        <Link to ='/'>
                            <i className = 'fas fa-home'></i> Home
                        </Link>
                    </div>
                    <div>
                        <Link to = '/customers/buildings'>
                            <i className = 'fas fa-building'></i> Buildings
                        </Link>
                    </div>
                    <div>
                        <Link to = '/customers/companies'>
                            <i className = 'fas fa-building'></i> Companies
                        </Link>
                    </div>
                    <div>
                        <Link to = '/technicians'>
                            <i className = 'fas fa-tools'></i> Technicians
                        </Link>
                    </div>
                    <div>
                        <Link to = '/boiler/boilers'>
                            <i className = 'fab fa-hotjar'></i> Boilers
                        </Link>
                    </div>
                    <div>
                        <Link to = '/boiler/boilerstype'>
                            <i className = 'fas fa-fire'></i> Boilers Type
                        </Link>
                    </div>
                    <div>
                        <Link to = '/appoiments'>
                            <i className = 'fas fa-calendar'></i> Appoiments
                        </Link>
                    </div>
                    <div>
                        <Link to = '/reports'>
                            <i className='fab fa-readme'></i> Reports
                        </Link>
                    </div>
                </SideBar>
            </div>
            <div>
                <button onClick={handleClick}>Logout</button>
            </div> 
            <MainContainer container={children}></MainContainer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    signoutAction: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signoutAction,
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(Layout);