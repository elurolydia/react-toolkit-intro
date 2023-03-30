import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  str: 'users',
};

export const stringSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {
    changeToUsers: (state) => {
      state.str =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, dolorem placeat quod voluptate aliquam ipsa iste ratione consequatur ipsum aliquid, tenetur quibusdam, soluta ab fuga! Dolore quibusdam mollitia magnam consectetur.';
    },
    changeToPosts: (state) => {
      state.str = 'posts';
    },
    changeToComments: (state) => {
      state.str = 'comments';
    },
    changeToPolice: (state) => {
      state.str = 'police';
    },
    changeToArmy: (state) => {
      state.str = 'army';
    },
  },
});

export const {
  changeToUsers,
  changeToPosts,
  changeToComments,
  changeToPolice,
  changeToArmy,
} = stringSlice.actions;

export default stringSlice.reducer;
