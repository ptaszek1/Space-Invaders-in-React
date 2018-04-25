import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx'

require('../sass/main.scss');

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);