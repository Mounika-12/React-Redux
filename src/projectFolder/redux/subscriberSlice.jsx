import { createSlice } from "@reduxjs/toolkit";

export const subscriberSlice = createSlice({
    name: 'newSubscriber',
    initialState : {
      users:[]
    },
    reducers: {
      addUsers: (state,action) => {
        state.users.push(action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addUsers } = subscriberSlice.actions
  
  export default subscriberSlice.reducer