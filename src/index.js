import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reduxStore/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// if(module.hot) {
//     module.hot.accept('./Router', () => {
//         const NextApp = require('./Router').default;
//         ReactDOM.render(<NextApp />, document.getElementById('root'));
//     })
// }