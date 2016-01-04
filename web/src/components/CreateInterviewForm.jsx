import React from 'react';

class CreateInterviewForm extends React.Component {

    render() {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <label className="sr-only" for="email">Email address:</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>
                <div class="form-group">
                    <label className="sr-only" for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd"></input>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox"> Remember me</input></label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
};

export default CreateInterviewForm;