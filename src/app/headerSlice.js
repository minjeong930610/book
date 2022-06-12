/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        title: '우리집',
        back: false,
        backLogin: false, //소셜 로그인 후 프로필 창에서 Back시 로그인으로 이동
        location: false, //아래버튼
        search: false,
        favorite: false,
        alert: false,
        trash: false,
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setBack: (state, action) => {
            state.back = action.payload;
        },
        setBackLogin: (state, action) => {
            state.backLogin = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setFavorite: (state, action) => {
            state.favorite = action.payload;
        },
        setAlert: (state, action) => {
            state.alert = action.payload;
        },
        setTrash: (state, action) => {
            state.trash = action.payload;
        },
    },
});

export const { setTitle, setBack, setBackLogin, setLocation, setSearch, setFavorite, setAlert, setTrash } = headerSlice.actions;

export default headerSlice.reducer;
