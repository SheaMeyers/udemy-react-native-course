import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = () => {
    switch (action.type) {
        default:
            return State;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
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
    { isSignedIn: false}
);

