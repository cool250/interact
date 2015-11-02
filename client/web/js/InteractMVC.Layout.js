/*global TodoMVC:true, Backbone */

var TodoMVC = TodoMVC || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter');

	InteractMVC.RootLayout = Backbone.Marionette.LayoutView.extend({

		el: '#todoapp',

		regions: {
			subscriber: '#template-subscriber',
			publisher: '#template-publisher',
            footer: "template-footer"
		}
	});

	// Layout Subscriber View
	InteractMVC.SubscriberLayout = Backbone.Marionette.ItemView.extend({
	   template: '#template-subscriber'
	});

    // Layout Publisher View
	InteractMVC.PublisherLayout = Backbone.Marionette.ItemView.extend({
		template: '#template-publisher'
	});

	// Layout Footer View
	InteractMVC.FooterLayout = Backbone.Marionette.ItemView.extend({
		template: '#template-footer'
	});
    
})();
