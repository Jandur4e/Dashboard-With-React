import { Link } from "react-router-dom";
import "../../css/sidemenu.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { BsFillFilePostFill, BsBlockquoteRight } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import { BiSolidContact, BiSolidLogIn } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import logo from "../../images/logo.jpg"

function Sidemenu() {
    const [isOpen, setOpen] = useState(false)


    return (
        <div className={isOpen === true ? "sidemenu" : "sidemenu active"}>
            <div className={isOpen === true ? "logo-img" : "logo-img small"}>
                <img src={logo} alt="logo" />
            </div>
            <dvi className="hamburger">
                <Hamburger size={16} toggled={isOpen} toggle={setOpen} />
            </dvi>
            <div>
                <Link className="link" to="/">
                    <LuLayoutDashboard />
                    <div className={isOpen === true ? "" : "none"}>
                        Dashboard
                    </div>
                </Link>
            </div>
            <div>
                <Link className="link" to={"/products"}>
                    <MdProductionQuantityLimits />
                    <div className={isOpen === true ? "" : "none"}>
                        Products
                    </div>
                </Link>
            </div>
            <div>
                <Link className="link" to={"/carts"}>
                    <PiShoppingCartSimpleBold />
                    <div className={isOpen === true ? "" : "none"}>
                        Carts
                    </div>
                </Link>
            </div >
            <div>
                <Link className="link" to={"/users"}>
                    <FaUsers />
                    <div className={isOpen === true ? "" : "none"}>
                        Users
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/posts"}>
                    <BsFillFilePostFill />
                    <div className={isOpen === true ? "" : "none"}>
                        Posts
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/todos"}>
                    <FcTodoList />
                    <div className={isOpen === true ? "" : "none"}>
                        ToDos
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/blogs"}>
                    <SiBlogger />
                    <div className={isOpen === true ? "" : "none"}>
                        Blogs
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/quotes"}>
                    <BsBlockquoteRight />
                    <div className={isOpen === true ? "" : "none"}>
                        Quotes
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/fiveposts"}>
                    <BsFillFilePostFill />
                    <div className={isOpen === true ? "" : "none"}>
                        Posts
                    </div>
                </Link >
            </div >
            <div>
                <Link className="link" to={"/students"}>
                    <BsBlockquoteRight />
                    <div className={isOpen === true ? "" : "none"}>
                        Students
                    </div>
                </Link>
            </div>
            <div>
                <Link className="link" to={"/contact"}>
                    <BiSolidContact />
                    <div className={isOpen === true ? "" : "none"}>
                        Contact
                    </div>
                </Link>
            </div >
            <div>
                <Link className="link" to={"/counter"}>
                    <TbBrandRedux />
                    <div className={isOpen === true ? "" : "none"}>
                        Counter
                    </div>
                </Link>
            </div >
            <div>
                <Link className="link" to={"/login"}>
                    <BiSolidLogIn />
                    <div className={isOpen === true ? "" : "none"}>
                        Login
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default Sidemenu;