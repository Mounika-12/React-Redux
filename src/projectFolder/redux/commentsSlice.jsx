import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: 'newComments',
    initialState : {
      comments:[]
    },
    reducers: {
      addComments: (state,action) => {
        state.comments.push(action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addComments } = commentSlice.actions
  
  export default commentSlice.reducer