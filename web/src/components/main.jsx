var React  = require('react');
var CodeEditor = require('./CodeEditor.jsx');

var MainLayout = React.createClass({
  render: function() {
    return (     
      <CodeEditor/>
    )
  }
});

module.exports = MainLayout;