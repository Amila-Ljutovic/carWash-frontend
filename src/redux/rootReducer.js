import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebarReducers';

const rootReducer = combineReducers({
   sidebar: sidebarReducer
});

export default rootReducer;