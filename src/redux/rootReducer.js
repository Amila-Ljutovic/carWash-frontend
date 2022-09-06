import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebarReducers';
import userReducer from './user/userReducers';

const rootReducer = combineReducers({
   sidebar: sidebarReducer,
   user: userReducer
});

export default rootReducer;