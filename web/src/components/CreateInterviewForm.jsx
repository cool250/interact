import React from 'react';
import ReactDOM from 'react-dom';
import CreateQuestions from './CreateQuestions.jsx';
import Link from 'react-router'

class CreateInterviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.showQuestionsModal = this.showQuestionsModal.bind(this);
        this.state = {showModal: false};
    }

    showQuestionsModal() {
        //this.state = {showModal: true};
        this.setState({showModal: true});
        console.log("setting state to true : " + this.state.showModal);
    }

    shouldComponentUpdate() {
        console.log("Inside should update");
        return true;
    }

    render() {
        //var showQModel = this.state.showModal;
        console.log("CreateInterviewForm " + this.state.showModal);
        return (
            //Initial state
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        Create you own question
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-primary" onClick={this.showQuestionsModal}>Create Questions</button>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-body">
                        You can also choose questions from our question bank
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-primary">Choose Questions</button>
                    </div>
                </div>



                <CreateQuestions showQModal={this.state.showModal}/>
            </div>
        )
    }
}

export default CreateInterviewForm;