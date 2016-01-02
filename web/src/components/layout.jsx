var React  = require('react');
var NavigationBar = require('./Navbar.jsx');
var MainLayout = require('./Main.jsx');

var Layout = React.createClass({
  render: function() {
    return (  
      <div className="Layout">  
        <NavigationBar/>
        <MainLayout/>
      </div>
    )
  }
});

module.exports = Layout;