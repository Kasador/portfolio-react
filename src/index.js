import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Portfolio from './Portfolio';
import 'animate.css';

const destination = document.querySelector('#root');

ReactDOM.render(<Portfolio />, destination);