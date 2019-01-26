import { createStore, combineReducers } from 'redux';
import { counter } from './reducers';

export default ()=> {
    return createStore(
        combineReducers({
            counter
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 
}