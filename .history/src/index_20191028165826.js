import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myData = [
    'Buy Ice Cream',
    'Eat Ice Cream',
    'Go To The Gym',
]

ReactDOM.render(<App theList = {myData}/>, document.getElementById('root'));

serviceWorker.unregister();
