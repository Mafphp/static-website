import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
const apiCoreAddress = process.env.API_CORE_ADDRESS;
if (apiCoreAddress) {
    const script = document.createElement('script');
    script.src = `${apiCoreAddress}/core/tracking/index.js`;
    script.async = true;
    document.head.appendChild(script);
}

registerServiceWorker();
