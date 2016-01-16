import React from 'react';
import { Link } from 'react-router'

class NavigationBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img className="brandImage" alt="Brand" src="img/hired.jpeg"></img>
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#"><i className="fa fa-home"></i> Home</a></li>
                        <li><Link to="/join"><i className="fa fa-video-camera"></i> Join</Link></li>
                        <li><Link to="/create"><i className="fa fa-pencil-square-o"></i> Create Interview</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login"><i className="fa fa-sign-in"></i> Login</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
};
 
export default NavigationBar;