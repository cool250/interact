import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import AppLayout from './components/AppLayout.jsx';
import Content from './components/Content.jsx';

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
    <Router history={browserHistory}>
        <Route path="/" component={AppLayout}>
            <IndexRoute component={Content} />
        </Route>
    </Router>
), ReactApp)