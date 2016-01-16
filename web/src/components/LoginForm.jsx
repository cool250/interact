import React from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';

class LoginForm extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="top-content">
                <div className="inner-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 form-box">
                                <div className="form-top">
                                    <div className="form-top-left">
                                        <p>Enter your username and password to log on:</p>
                                    </div>
                                    <div className="form-top-right">
                                        <i className="fa fa-key"></i>
                                    </div>
                                </div>
                                <div className="form-bottom">
                                    <form role="form" action="" method="post" className="login-form">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="form-username">Username</label>
                                            <input type="text" name="form-username" placeholder="Username..."
                                                   className="form-username form-control" id="form-username"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="form-password">Password</label>
                                            <input type="password" name="form-password" placeholder="Password..."
                                                   className="form-password form-control" id="form-password"></input>
                                        </div>
                                        <button type="submit" className="btn">Sign in!</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 social-login">
                                <div className="social-login-buttons">
                                    <a className="btn btn-link-1 btn-link-1-facebook" href="#">
                                        <i className="fa fa-facebook"></i> Facebook
                                    </a>
                                    <a className="btn btn-link-1 btn-link-1-twitter" href="#">
                                        <i className="fa fa-twitter"></i> Twitter
                                    </a>
                                    <a className="btn btn-link-1 btn-link-1-google-plus" href="#">
                                        <i className="fa fa-google-plus"></i> Google Plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;
export default LoginForm;