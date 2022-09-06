import { SET_CURRENT_USER } from "./userTypes"

const initialState = {
    currentUser: {},
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER: return  Object.assign({}, state, {
            currentUser: action.currentUser
        });

        default: return state
    }
}

export default userReducer;