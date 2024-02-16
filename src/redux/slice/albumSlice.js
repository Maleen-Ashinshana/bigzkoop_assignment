import {createSlice} from '@reduxjs/toolkit';

export const albumsSlice = createSlice({
    name: 'albums',
    initialState: [],
    reducers: {
        setAlbums: (state, action) => {
            return action.payload;
        },
    },
});

export const {setAlbums} = albumsSlice.actions;