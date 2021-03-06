import {
    createStore,
    applyMiddleware,
    compose
} from "redux";

import thunk from "redux-thunk";
import reducers from "./reducers"

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f;

const store = createStore(reducers, compose(applyMiddleware(thunk), devTools));

export default store;