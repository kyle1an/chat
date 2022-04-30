import 'core-js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log((window || global)['__core-js_shared__']?.versions)
ReactDOM.render(<App />, document.querySelector('#root'));
