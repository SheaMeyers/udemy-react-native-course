import createDataContext from "./createDataContext";

const authReducer = () => {
    switch (action.type) {
        default:
            return State;
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false}
);

