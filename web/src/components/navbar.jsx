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
                    <div className="navbar-right">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/home">Home</Link></li>
                            <li><Link to="/join">Join</Link></li>
                            <li><Link to="/create">CreateInterviewForm</Link></li>
                        </ul>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavigationBar;