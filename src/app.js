import './common/css/common.css';
import 'whatwg-fetch';
import querystring from 'querystring';
import React from 'react';
import {render} from 'react-dom';
import initialSize from './utils/flexiable';
import Home from './containers/home/index.js';
initialSize(window, window['lib'] || (window['lib'] = {}))
render(<Home/>,document.getElementById('app'))
