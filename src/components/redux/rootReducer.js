import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import appReducer from "./slices/appSlice"

const rootPersisConfig = {
    key: 'root',
    storage,
    keyPrefix: "redux-"
    //whiteList and BlackList
}

const rootReducer = combineReducers({
    app: appReducer,
})

export { rootPersisConfig, rootReducer}