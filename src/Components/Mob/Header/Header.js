import "./Header.scss";
import logo from "../../PC/Header/img/logo.png";
import { useState } from "react";

const Header = (props) => {
    //state
    const header_topic = [
        {name: "Продукт", class_name: ".products_mob"},
        {name: "Услуги", class_name: ".services_mob"},
        {name: "О нас", class_name: ".about_mob"},
        {name: "Контакты", class_name: ".contacts_mob"},
    ]
    const [menu_active, setMenuActive] = useState("")

    //handlers
    const activateMenu = () => {
        if (menu_active === "active"){
            setMenuActive("")
        }else{
            setMenuActive("active")
        }
    }

    return <header className="header_mob">
        <div className="main_header">
            <img className="logo_header" src={logo} alt="logo"/>
            <button className={"menu "+menu_active} onClick={activateMenu}>
                <div className="line first"/>
                <div className="line second"/>
                <div className="line third"/>
            </button>
        </div>
        <section className={"navigation_mob "+menu_active}>
            {header_topic.map((item, index) => {
                return <div className="nav_item" key={index} onClick={() => {props.gotoSection(item.class_name)}}><p>{item.name}</p></div>
            })}
        </section>
    </header>
}
export default Header