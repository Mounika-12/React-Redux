import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import subscriberReducer from './redux/subscriberSlice'
import commentReducer from './redux/commentsSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    newSubscriber : subscriberReducer,
    newComments : commentReducer
  },
})