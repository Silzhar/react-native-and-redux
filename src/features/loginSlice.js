import { createSlice, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// const INITIAL_STATE = {
//   email: [],
//   all_subjects: [
//     'User:'
//   ]
// }
function emailReducer(state = INITIAL_STATE , action){
  switch (action.type) {
    case 'SELECT_SUBJECT':
      
      // copy the state 
      const { current,  all_subjects,} = state;
 
      //remove a subject from the all_subjects array
       
      const addedSubject = all_subjects.splice(action.payload, 1);
 
      // put subject in current array
      current.push(addedSubject);
 
      // update the redux state to reflect the change
      const newState = { current, all_subjects };
       
      //return new state
      return newState;
 
    default:
      return state
  }
}

 
export default combineReducers({
  subjects: emailReducer
});

// const loginSlice = createSlice({
//     name: 'login',
//     initialState: {
//         email: '',
//         password: '',
//     },
//     reducers: {
//         sendLogin: (state, action) => {
//             const { email, password } = state.task;
//             state.createCard.push(email, password);
//         // emailValue: state => { state.email },
//         // passwordValue: state => { state.password }
//         // Reset states.
//       state.initialState = {
//         email: '',
//         password: '',
//       }
//     }
//   }
// })

// // Actions.
// export const { sendLogin } = loginSlice.actions

// // Selectors.
// export const selectEmail = (state) => state.login.email

// export default loginSlice.reducer

// const store = configureStore({
//     reducer: loginSlice.reducer
// })

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(sendLogin())
