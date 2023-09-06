import { createContext, useState } from "react";
export const userContext = createContext();



const usersContext = () => {
    const [thisUser, setThisUser] = useState([]);
    const checkUser = { addToCart, setAddToCart };

    return (
        <userContext.Provider value={checkUser}>{children}</userContext.Provider>
    )
}



export default usersContext