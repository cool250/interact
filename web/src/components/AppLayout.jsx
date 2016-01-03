var React  = require('react');
var NavigationBar = require('./Navbar.jsx');
var Content = require('./Content.jsx');

var AppLayout = React.createClass({
  render: function() {
    return (
      <div className="Layout">  
        <NavigationBar/>
        <Content/>
      </div>
    )
  }
});

module.exports = AppLayout;