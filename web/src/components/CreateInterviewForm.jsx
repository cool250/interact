import React from 'react';

class CreateInterviewForm extends React.Component {

    render() {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <label className="sr-only" htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email"></input>
                </div>
            </form>
        )
    }
};

export default CreateInterviewForm;