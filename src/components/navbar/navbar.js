import React, {useState} from "react";
import Styles from "./navbar.module.css"
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo.jpg"

const NavBar = () =>{
    const [mobNav, SetMobNav] = useState(false)
    return (
        <header className={Styles.navbar}>
            <img className={Styles.img_style} src={Logo} alt="/"></img>
            <nav>
                <ul className={mobNav ? [Styles.menu, Styles.active].join(' ') : [Styles.menu]}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
            <div onClick={()=>SetMobNav(!mobNav)} className={Styles.mobile_btn}>
                {mobNav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}                
            </div>
        </header>
    )
}


export default NavBar