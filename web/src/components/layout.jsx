var React  = require('react');
var NavigationBar = require('./navbar.jsx');
var MainLayout = require('./main.jsx');

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