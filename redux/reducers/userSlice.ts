import { createSlice } from "@reduxjs/toolkit";

export type User={
    mobileNumber: string,
    password: string
}

export type UserListState ={
    users: User[];
    loading: boolean;
    error: boolean
}


const initialState: UserListState ={
    users: [],
    loading: false,
    error: false

}

const userListState = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {}
})

export default  userListState.reducer;