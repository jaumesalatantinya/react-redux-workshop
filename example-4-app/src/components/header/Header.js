import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {

    return (
        <div>
            <h1>
                <IndexLink to="/">Privalia WebApp Header hola</IndexLink>
            </h1>
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="showCase" activeClassName="active">ShowCase</Link>
            </nav>
        </div>
    );
};

export default Header;