import { FlatList } from 'react-native-gesture-handler'
import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authenticated
    /* if signing up fails, we probably need to reflect an error message
       somehow
    */
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  }
}

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
)
