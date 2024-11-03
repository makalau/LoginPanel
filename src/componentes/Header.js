import React, {useState} from "react";
import ReactSwitch from "react-switch";


export default function Header(props){
    const [theme, setTheme] = useState("lightMode");
    const mudaTema = () =>{
        (theme == "lightMode")? setTheme("darkMode"): setTheme("lightMode");
        props.toggleTheme(theme);
    }
    return(
    <header className="cabecalho">
        <nav className="menu">
        <div className="logoDiv">
            <i class="bi bi-bug-fill"></i>
            <h1 className="logo">Marcelo <span>Victor</span></h1>
            </div>
                <div className="switch-buttom">
                <p style={{fontSize: "18px", color: "#A4A4A4"}}>{theme}&nbsp; &nbsp;</p>
                <ReactSwitch 
                onChange={mudaTema} 
                checked={theme === "lightMode"}
                onColor="#0efcee"
                onHandleColor="#191970"
                offColor="#191970"
                offHandleColor="#000"
                />
            </div>
            <ul>
                <div className="navlink active">
                <i className="bi bi-house-fill"></i>
                <li><a href="#">Home</a></li>
                </div>
                <div className="navlink">
                <i className="bi bi-kanban-fill"></i>
                <li><a href="#">Project</a></li>
                </div>
                <div className="navlink">
                <i className="bi bi-tools"></i>
                <li><a href="#">Services</a></li>
                </div>
                <div className="navlink">
                <i className="bi bi-phone-fill"></i>
                <li><a href="#">Contact</a></li>
                </div>
                <div className="navlink">
                <i className="bi bi-file-person"></i>
                <li><a href="#">About me</a></li>
                </div>
            </ul>
        </nav>
    </header>

)}