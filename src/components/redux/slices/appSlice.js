import { createSlice } from "@reduxjs/toolkit";

import {dispatch} from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT" // CONTACT, SHARED, STARED
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open
        },
        updatSidebarType(state, action){
            state.sidebar.type = action.payload.type
        }
    }
})

export const { toggleSidebar, updatSidebar } = slice.actions

//Thunk FNc performs async operations in the redux life cycle
export function ToggleSidebar() {
    return () => {
        dispatch(slice.actions.toggleSidebar())
    }
}
export function UpdateSidebar(type) {
    return () => {
        dispatch(slice.actions.updatSidebarType({ type }));
    }
}

export const selectNavbar = (state) => state.app.sidebar.open;
export const selectType = (state) => state.app.sidebar.type;

export default slice.reducer