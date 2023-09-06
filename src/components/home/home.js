import { useContext } from "react";
import "../../css/Dashboard.css"
import Header from "../header/header";
import { UserToLogIn } from "../login/LoginContext";
import Modal from "./Modal";
import Background from "../sidemenu/Background";


function Home() {
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn);
    console.log(loginThisUser);

    return (
        <div className="display-output">
            {/* <div className="layout"> */}
            <Header />
            <h1>Home Page</h1>
            <div className="wrapper">
                {/* <Modal /> */}
            </div>
        </div>
        // </div >
    )
}

export default Home;