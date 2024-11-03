import React, {useState} from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import FacebookIcon from "./assets/imgs/facebook.png"
import GoogleIcon from "./assets/imgs/google.png"
import "./css/style.css"

export default function App(){
  let [Background, setBackground] = useState("light-background");
  let [Theme, setTheme] = useState("light-theme")

  const toggleTheme = (theme)=>{
    if (theme == "lightMode"){
      setBackground("dark-background");
      setTheme("dark-theme");
    }
    else if (theme == "darkMode"){
      setBackground("light-background");
      setTheme("light-theme");
    }
  }
  return(
    <>
    <Header toggleTheme={toggleTheme}/>
    <main className="principal" id={Background}>
      <section className="section-forms" id={Theme}>
        <div className="div-form">
          <h2>Acesse e aproveite nossos serviços</h2>
          <form className="form">
            <input type="text" placeholder="Usuário/E-mail" className="user.name"></input>
            <input type="password" placeholder="Senha" className="password"></input>
            <button className="btn">Entrar</button>
            <p><span className="subscribe">Inscreva-se </span>|<span> Esqueceu a senha?</span></p>
          </form>
          <div className="accounts-div">
            <div className="account-item">
              <img src={FacebookIcon}/>
            </div>
            <div className="account-item">
              <img src={GoogleIcon}/>
            </div>  
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
};
