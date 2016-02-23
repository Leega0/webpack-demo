import React from 'react';
var ReactDOM = require('react-dom');
import Hello from './component.js';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
//css
require('./css/main.scss')