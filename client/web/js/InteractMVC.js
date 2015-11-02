/*global Backbone, InteractMVC:true, $ */

var InteractMVC = InteractMVC || {};

$(function () {
	'use strict';

	// After we initialize the app, we want to kick off the router
	// and controller, which will handle initializing our Views
	InteractMVC.App.on('start', function () {
		Backbone.history.start();
		var controller = new InteractMVC.Controller();
		controller.router = new InteractMVC.Router({
			controller: controller
		});

		controller.start();
	});

	// start the InteractMVC app (defined in js/InteractMVC.js)
	InteractMVC.App.start();
});