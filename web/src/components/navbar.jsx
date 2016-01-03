var React = require('react');

var NavigationBar = React.createClass({
    render: function () {
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
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Create an interview</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = NavigationBar;