import 'whatwg-fetch';
import './common/css/common.css';
import 'whatwg-fetch';
import querystring from 'querystring';
import React from 'react';
import {render} from 'react-dom';
import initialSize from './utils/flexiable';
import Home from './containers/home/index.js';
import Store from './store';
const store=new Store();
initialSize(window, window['lib'] || (window['lib'] = {}))
render(<Home store={store}/>,document.getElementById('app'))
