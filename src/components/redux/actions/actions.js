export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num,
    };
};
export const incrementByTwo = (num) => {
    return {
        type: "INCREMENT",
        payload: num,
    };
};

export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num,
    };
};
export const decrementByTwo = (num) => {
    return {
        type: "DECREMENT",
        payload: num,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

// export const logIn = () => {
//     return {
//         type: "LOG_IN",
//     };
// };

// export const logOut = () => {
//     return {
//         type: "LOG_OUT",
//     };
// };