import React from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';
import ShowQuestions from './ShowQuestions.jsx';

class JoinInterview extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.loadSession();
    }

    loadSession() {
        $.ajax({
            url: '../api/v1/session',
            dataType: 'json',
            success: (data) => {
                this.setState({OTSession: data});
                this.initializeSession();
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    initializeSession() {

        TB.addEventListener("exception", this.exceptionHandler);


        if (TB.checkSystemRequirements() == 1) {
            // Initialize the session
            var session = TB.initSession(this.state.OTSession.sessionId);
        } else {
            // The client does not support WebRTC.
            // You can display your own message.
        }

        this.setState({session: session});

        // Add event listeners to the session
        session.on('sessionConnected', this.sessionConnectedHandler.bind(this));
        session.on('streamCreated', this.streamCreatedHandler.bind(this));
        session.on('streamDestroyed', this.streamDestroyedHandler.bind(this));

    }

    // Attach event handlers
    connect() {
        this.state.session.connect(this.state.OTSession.apiKey, this.state.OTSession.token);
    }

    disconnect() {
        this.state.session.disconnect();
    }

    //--------------------------------------
    //  OPENTOK EVENT HANDLERS
    //--------------------------------------

    sessionConnectedHandler(event) {
        // Make up an id for our publisher
        var divId = 'publisher';

        var publisherOptions = {width:'100%', height:'100%', resolution: '1280x720', insertMode: 'append'};
        // Initialize a Publisher, and place it into the element with id="publisher"
        var publisher = TB.initPublisher(divId, publisherOptions);
        this.state.session.publish(publisher);
    }

    streamCreatedHandler(event) {

        console.log("streamCreatedHandler" + event.streams.length);

        var subContainer = document.createElement('div');
        subContainer.id = 'stream-' + event.stream.streamId;
        document.getElementById('subscribers').appendChild(subContainer);

        var subscriberOptions = {width: '100%', height: '100%'};

        // Subscribe to the stream that caused this event, put it inside the container we just made
        this.state.session.subscribe(event.stream, subContainer, subscriberOptions);
        this.resizePublisher("128px", "96px");
    }

    streamDestroyedHandler(event) {
        // Get all destroyed streams
        this.resizePublisher("640px", "480px");
    }


    //--------------------------------------
    //  HELPER METHODS
    //--------------------------------------

    resizePublisher(width, height) {
        var publisherContainer = document.getElementById('publisher');
        publisherContainer.style.width = width;
        publisherContainer.style.height = height;
    }

    render() {
        return (
            <Grid>
                <Row>
                    <button type="button" className="btn btn-primary" onClick={this.connect.bind(this)}>Join Interview</button>
                </Row>
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