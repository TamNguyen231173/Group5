import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@reduxs';
import { act } from 'react-test-renderer';

const defaultUserState: User = {
    _id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    photo: "",
    verified: false,
    posts_saved: [],
    video_saved: [],
    createdAt: undefined,
    updateAt: undefined,
    id: ""
}
const userSlice = createSlice({
    name: 'user',
    initialState: defaultUserState,
    reducers: {
        userData(state: User, action: PayloadAction<User>) {
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.role = action.payload.role
            state.photo = action.payload.photo
            state.verified = action.payload.verified
            state.posts_saved = action.payload.posts_saved
            state.video_saved = action.payload.video_saved
            state.createdAt = action.payload.createdAt       
            state.updateAt = action.payload.updateAt
            state.id = action.payload.id
        },
    },
});

export const { userData } = userSlice.actions;
export const UserReducer = userSlice.reducer;
