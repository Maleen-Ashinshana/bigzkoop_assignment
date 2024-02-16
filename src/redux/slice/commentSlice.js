import {createSlice} from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        setComments: (state, action) => {
            return action.payload;
        },
    },
});

export const {setComments} = commentsSlice.actions;