import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  UserListSlice  from "./userSlice";

const rootReducers =combineReducers({
    userList: UserListSlice
});

export type RootState = ReturnType<typeof rootReducers>;

const store = configureStore({
    reducer: rootReducers
});


export default store;