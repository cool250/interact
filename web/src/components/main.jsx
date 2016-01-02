var React  = require('react');
var BootStrap = require('bootstrap');
var ReactBootstrap = require('react-bootstrap');
var AppForm = require('./form.jsx');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

const mainInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={3} md={2}><code>Test</code></Col>
      <Col xs={6} md={4}><code><AppForm/></code></Col>
    </Row>
  </Grid>
);

var MainLayout = React.createClass({
  render: function() {
    return (     
      mainInstance
    )
  }
});

module.exports = MainLayout;