import { combineReducers } from "redux";
import { campaignsReducer } from "./campaignsReducer";
import { constructorReducer } from "./constructorReducer";
import { dndReducer } from "./dndReducer";
import { filesReducer } from "./filesReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    constructors: constructorReducer,
    dnd: dndReducer,
    user: userReducer,
    campaigns: campaignsReducer,
    files: filesReducer
})