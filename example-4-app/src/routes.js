import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import ShowCase from './components/showcase/ShowCase';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="showcase" component={ShowCase} />
    </Route>
);