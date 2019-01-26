import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './stores';
import { Page } from './screens/Page';
import { Home } from './screens/Home';


ReactDOM.render(
    <Provider store={store()}>
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/page" component={Page} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);