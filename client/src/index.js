import 'core-js'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// console.log(Array.prototype.findLast())
console.log((window || global)['__core-js_shared__']?.versions)
// console.log([11, 11, 22].findLastIndex(n => n.value % 2 === 1)); // 2)
ReactDOM.render(<App />, document.querySelector('#root'));
