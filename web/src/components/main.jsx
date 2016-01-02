var React  = require('react');
var BootStrap = require('bootstrap');
var ReactBootstrap = require('react-bootstrap');
var CodeEditor = require('./CodeEditor.jsx');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

const mainInstance = (
  <Grid>
    <Row className="show-grid">
      <CodeEditor/>
    </Row>
  </Grid>
);

var MainLayout = React.createClass({
  render: function() {
    return (     
      <CodeEditor/>
    )
  }
});

module.exports = MainLayout;