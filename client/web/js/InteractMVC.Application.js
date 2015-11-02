/*global Backbone, TodoMVC:true */

var InteractMVC = InteractMVC || {};

(function () {
	'use strict';

	var InteractApp = Backbone.Marionette.Application.extend({
		setRootLayout: function () {
			this.root = new InteractMVC.RootLayout();
		}
	});

	// The Application Object is responsible for kicking off
	// a Marionette application when its start function is called
	//
	// This application has a singler root Layout that is attached
	// before it is started.  Other system components can listen
	// for the application start event, and perform initialization
	// on that event
	InteractMVC.App = new InteractApp();

	InteractMVC.App.on('before:start', function () {
		InteractMVC.App.setRootLayout();
	});

})();
