import { createContext, useState } from "react";
import profile from "../../images/profile.png";
export const UserToLogIn = createContext();


function LogInUser({ children }) {
    const [loginThisUser, setLoginThisUser] = useState([]);
    const logInUsers = { loginThisUser, setLoginThisUser };

    return (
        <UserToLogIn.Provider value={logInUsers}>{children}</UserToLogIn.Provider>
    )
}

export default LogInUser;