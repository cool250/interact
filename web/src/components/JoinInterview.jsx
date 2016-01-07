import React from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';

class JoinInterview extends React.Component {

    constructor() {
        super();
    }


    render () {
        return (
            <Grid fluid="true">
                <Row>
                    <Col md={8}>
                        <img src="http://placehold.it/800x400?text=IMAGE" alt="Image"></img>
                    </Col>
                    <Col md={4}>
                        <div class="well">
                            <p>Some text..</p>
                        </div>
                        <div class="well">
                            <p>Upcoming Events..</p>
                        </div>
                        <div class="well">
                            <p>Visit Our Blog</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default JoinInterview;