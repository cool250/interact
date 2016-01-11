import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

class ShowQuestions extends React.Component {

    constructor(props) {
        super(props);
    }


    shouldComponentUpdate() {
        console.log("Inside should update");
        return true;
    }

    render() {
        return (
        <Panel header="Interview Questions" bsStyle="primary">
            <ListGroup>
                <ListGroupItem>1. What is your greatest strength ?</ListGroupItem>
                <ListGroupItem>2. Why are you interested in the position ?</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
        </Panel>

        );
    }
}

export default ShowQuestions;