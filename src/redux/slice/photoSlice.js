import {createSlice} from '@reduxjs/toolkit';

export const photosSlice = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        setPhotos: (state, action) => {
            return action.payload;
        },
    },
});

export const {setPhotos} = photosSlice.actions;