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
                        <li className="active"><a href="#">Home</a></li>
                        <li><Link to="/join">Join</Link></li>
                        <li><Link to="/create">Create Interview</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
};
 
export default NavigationBar;