var React  = require('react');

var Footer = React.createClass({
  render: function() {
    return (     
      	<div className="navbar navbar-default navbar-fixed-bottom">
			<div className="container">
			  <p className="navbar-text pull-left">2015 - Site Built By Nishant Usapkar and Ashish Sharma</p>  
			  <a href="http://youtu.be/zJahlKPCL9g" className="navbar-btn btn-danger btn pull-right">
			  <span className="glyphicon glyphicon-star"></span>Subscribe on YouTube</a>
			</div>
		</div>
    )
  }
});

module.exports = Footer;



