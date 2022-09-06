import { SET_SIDEBAR_DATA } from "./sidebarTypes"

export const setSidebarData = (sidebarData) => {
    return {
        type: SET_SIDEBAR_DATA,
        sidebarData: sidebarData,
    }
}