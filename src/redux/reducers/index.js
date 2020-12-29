import {
    combineReducers
} from "redux";

import accountReducers from "./accountReducers";

export default combineReducers({
    function(state, action) {if (state == null) state = []; return state;},
    accountReducers,
})