import "./About.scss";
import logo from "./img/logo.png";
import sfedu from "./img/sfedu.png";
import fpi from "./img/fpi.png";
import ictis from "./img/ictis.png";
import tsl from "./img/tsl.png";

const About = () => {
    return <section className="pc_section about">
        <div className="title title_about"><p>О нас</p></div>
        <div className="block">
            <div className="logo"><img alt="logo" src={logo}/></div>
            <div className="descr">
                <div className="left_sec">
                    <p>ООО “НА ВЗЛËТ”</p>
                    <p>ИНН - 6154168220</p>
                    <p>ОГРН - 1246100025027</p>
                    <p>АДРЕС - 347900, Ростовская область, г. Таганрог, ул. Лесная Биржа, д. 20-б, Офис 9</p>
                </div>
                <div className="right_sec">
                    <div>
                        <img alt="sfedu" src={sfedu}/>
                    </div>
                    <div>
                        <img alt="ictis" src={ictis}/>
                    </div>
                    <div>
                        <img alt="fpi" src={fpi}/>
                    </div>
                    <div>
                        <img alt="tsl" src={tsl}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Проект поддержан Фондом содействия развитию малых форм предприятий в научно-технической сфере (Фонд содействия инновациям)</p>
            </div>
        </div>
    </section>
}
export default About