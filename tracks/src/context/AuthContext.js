import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { ...state, token: action.payload, errorMessage: '' };
        default:
            return State;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' });
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in
        // success: update state
        // error: show message
    };
};

const signout = (dispatch) => {
    return () => {
        // sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: ''}
);

