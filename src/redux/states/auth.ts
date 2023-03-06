import { LocalStorageTypes } from "@/model/localStorage";
import { LoginU } from "@/model/user";
import { getLocalStorage, setLocalStorage } from "@/utils/local_storage.utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState: LoginU = {
    token: ""

}

export const authSlice = createSlice({
    name: LocalStorageTypes.AUTH,
    initialState: getLocalStorage('auth') ? JSON.parse(getLocalStorage('auth') as string) : initialState,
    reducers: {
        logIn: (state, action)=> {
            setLocalStorage(LocalStorageTypes.AUTH, action.payload)
            return action.payload
        },
        logOut: (state, action)=>{
            localStorage.clear();
            return initialState;
        }
    }
})

export const {logIn, logOut} = authSlice.actions