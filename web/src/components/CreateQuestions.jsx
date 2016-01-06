/**
 * Created by Ashish on 1/4/16.
 */
import React from 'react';
//import Modal from 'boron/FadeModal';
import {Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter} from 'react-bootstrap';

let Component = React.Component;

class CreateQuestions extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.state = { showModal: false,
                       questionIndex: 1};
    }

    close() {
        console.log("closing");
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps " + props.showQModal);
        this.setState({showModal: props.showQModal});
    }


    render() {
        console.log("Props " + this.props.showQModal);
        return (
            <Modal show={this.state.showModal} bsSize="large" aria-labelledby="contained-modal-title-lg" onHide={this.close}>
                <ModalHeader closeButton>
                    <ModalTitle>Create Questions</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h4 className="panel-title">Question {this.state.questionIndex}</h4>
                        </div>
                        <div className="panel-body">
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary" onClick={this.close}>Close</button>
                </ModalFooter>
            </Modal>
        )
    }
}
//{this.props.showQModal}
export default CreateQuestions;