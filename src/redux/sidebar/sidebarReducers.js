import { SET_SIDEBAR_DATA } from "./sidebarTypes"

const initialState = {
    sidebarData: [],
}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SIDEBAR_DATA: return  Object.assign({}, state, {
            sidebarData: action.sidebarData
        });

        default: return state
    }
}

export default sidebarReducer;