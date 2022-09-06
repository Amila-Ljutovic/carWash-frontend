import { SET_CURRENT_USER } from "./userTypes"

export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        currentUser: currentUser,
    }
}