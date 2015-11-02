/*global TodoMVC:true, Backbone, $ */

var InteractMVC = InteractMVC || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter');
    var apiKey=1234, sessionId=5678, token=33253454;
    var session;
    
	// TodoList Router
	// ---------------
	//
	// Handles a single dynamic route to show
	// the active vs complete todo items
	InteractMVC.Router = Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			
		}
	});

	// TodoList Controller (Mediator)
	// ------------------------------
	//
	// Control the workflow and logic that exists at the application
	// level, above the implementation detail of views and models
	InteractMVC.Controller = Backbone.Marionette.Object.extend({
        
		initialize: function () {
            // Make an Ajax request to get the OpenTok API key, session ID, and token from the server
//            $.get(SAMPLE_SERVER_BASE_URL + '/session', function(res) {
//                this.apiKey = res.apiKey;
//                this.sessionId = res.sessionId;
//                this.token = res.token;
//            }).bind(this);
            this.session = OT.initSession(apiKey, sessionId);
		},

		// Start the app by showing the appropriate views
		start: function () {
            this.showSubscriber();
            this.showPublisher();
            //this.showFooter();
		},
        
        showSubscriber : function () {
            // Subscribe to a newly created stream
            this.session.on('streamCreated', function(event) {
                this.session.subscribe(event.stream, 'subscriber', {
                    insertMode: 'append',
                    width: '100%',
                    height: '100%'
                });
            });

            this.session.on('sessionDisconnected', function(event) {
                console.log('You were disconnected from the session.', event.reason);
            });
            var subscriber = new InteractMVC.SubscriberLayout();
            InteractMVC.App.root.showChildView('subscriber', subscriber);
        },
        
        showPublisher : function () {
              // Connect to the session
            this.session.connect(token, function(error) {
                // If the connection is successful, initialize a publisher and publish to the session
                if (!error) {
                    var publisher = OT.initPublisher('publisher', {
                        insertMode: 'append',
                        width: '100%',
                        height: '100%'
                    });

                    this.session.publish(publisher);
                } else {
                    console.log('There was an error connecting to the session: ', error.code, error.message);
                }
            });
            var publisher = new InteractMVC.PublisherLayout();
            InteractMVC.App.root.showChildView('publisher', publisher);
        },
        
		showFooter: function () {
			var footer = new InteractMVC.FooterLayout();
			InteractMVC.App.root.showChildView('footer', footer);
		}
	});
})();
