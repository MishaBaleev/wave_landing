import "./Header.scss";
import logo from "./img/logo.png"

const Header = (props) => {
    const header_topic = [
        {name: "Продукт", class_name: ".products"},
        {name: "Услуги", class_name: ".services"},
        {name: "О нас", class_name: ".about"},
        {name: "Контакты", class_name: ".contacts"},
    ]
    return <header className="header_pc">
        <img className="logo" src={logo}/>
        <nav className="navigation">
            {header_topic.map((item, index) => {
                return <div className="nav_item" key={index} onClick={() => {props.gotoSection(item.class_name)}}>
                    <p>{item.name}</p>
                </div>
            })}
        </nav>
    </header>
}
export default Header