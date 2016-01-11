import React from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';
import ShowQuestions from './ShowQuestions.jsx';

class JoinInterview extends React.Component {

    constructor() {
        super();
        this.state = {session: []}
    }

    componentDidMount() {
        this.loadSession();
    }

    loadSession() {
        $.ajax({
            url: '../api/v1/session',
            dataType: 'json',
            success: (data) => {
                this.setState({session: data});
                this.initializeSession();
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    initializeSession() {
        var apiKey = this.state.session.apiKey;
        var sessionId = this.state.session.sessionId;
        var token = this.state.session.token;

        // Initialize an OpenTok Session object
        var session = TB.initSession(sessionId);

        var publisherOptions = {width: 400, height: 300, insertMode: 'append'};

        var subscriberOptions = {width: 400, height: 300, insertMode: 'append'};

        // Initialize a Publisher, and place it into the element with id="publisher"
        var publisher = TB.initPublisher(apiKey, 'publisher', publisherOptions);

        // Attach event handlers
        session.on({

            // This function runs when session.connect() asynchronously completes
            sessionConnected: function (event) {
                // Publish the publisher we initialzed earlier (this will trigger 'streamCreated' on other
                // clients)
                session.publish(publisher);
            },

            // This function runs when another client publishes a stream (eg. session.publish())
            streamCreated: function (event) {
                // Create a container for a new Subscriber, assign it an id using the streamId, put it inside
                // the element with id="subscribers"
                var subContainer = document.createElement('div');
                subContainer.id = 'stream-' + event.stream.streamId;
                document.getElementById('subscribers').appendChild(subContainer);

                // Subscribe to the stream that caused this event, put it inside the container we just made
                session.subscribe(event.stream, subContainer, subscriberOptions);
            }

        });

        // Connect to the Session using the 'apiKey' of the application and a 'token' for permission
        session.connect(apiKey, token);
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col md={8}>
                        <div id="publisher"></div>
                        <div id="subscribers"></div>
                    </Col>
                    <Col md={4}>
                        <ShowQuestions/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
;

export default JoinInterview;