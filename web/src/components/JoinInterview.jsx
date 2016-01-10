import React from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';

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
                console.log(data);
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

        var pubOptions = {
            publishAudio: true,
            publishVideo: true,
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }

        var subOptions = {subscribeToAudio: true, subscribeToVideo: true};

        var session = OT.initSession(apiKey, sessionId);

        // Subscribe to a newly created stream
        session.on('streamCreated', function (event) {
            session.subscribe(event.stream, 'subscriber', subOptions);
            console.log('streamCreated');
        });

        session.on('sessionDisconnected', function (event) {
            console.log('You were disconnected from the session.', event.reason);
        });

        // Connect to the session
        session.connect(token, function (error) {
            // If the connection is successful, initialize a publisher and publish to the session
            if (!error) {
                var publisher = OT.initPublisher('publisher', pubOptions);

                session.publish(publisher);
                console.log('connect');
            } else {
                console.log('There was an error connecting to the session: ', error.code, error.message);
            }
        });
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col md={8}>
                        <div id="publisher"></div>
                        <div id="subscriber"></div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <p>Some text..</p>
                        </div>
                        <div>
                            <p>Upcoming Events..</p>
                        </div>
                        <div>
                            <p>Visit Our Blog</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
;

export default JoinInterview;