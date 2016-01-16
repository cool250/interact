import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppLayout from './components/AppLayout.jsx';
import Content from './components/Content.jsx';
import CreateInterviewForm from './components/CreateInterviewForm.jsx';
import JoinInterview from './components/JoinInterview.jsx';
import LoginForm from './components/LoginForm.jsx';

// Finally, we render a <Router> with some <Route>s.
render((
    <Router history={browserHistory}>
        <Route path="/" component={AppLayout}>
            <IndexRoute component={Content} />
            <Route path="create" component={CreateInterviewForm}/>
            <Route path="join" component={JoinInterview}/>
        </Route>
        <Route path="login" component={LoginForm}>
        </Route>
    </Router>
), ReactApp)


