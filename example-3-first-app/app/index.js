import React from 'react';
import { render } from 'react-dom';

import { jQuery } from 'jquery';
import { Bootstrap } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

render (
    <App />,
    document.getElementById('app')
);
