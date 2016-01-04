import React from 'react';

import NavigationBar from './NavBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';


class AppLayout extends React.Component {

    render () {
        return (
            <div className="Layout">
                <NavigationBar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
};

export default AppLayout;