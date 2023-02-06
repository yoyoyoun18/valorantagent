import { configureStore, createSlice } from '@reduxjs/toolkit'

let currentIndex = createSlice({
    name : 'currentIndex',
    initialState : {index : 0 },
    reducers : {
        changeIndex(state, a) {
            state.index = a.payload;
        }
    }
})

export let { changeIndex } = currentIndex.actions;

export default configureStore({
  reducer: { 
    currentIndex : currentIndex.reducer
  }
}) 