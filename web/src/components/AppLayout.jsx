import React from 'react';

import NavigationBar from './NavBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';


const AppLayout = React.createClass({
    render: function () {
        return (
            <div className="Layout">
                <NavigationBar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
});

export default AppLayout;