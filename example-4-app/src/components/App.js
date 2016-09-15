import React, {PropTypes} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
