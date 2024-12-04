import "./About.scss";
import logo from "../../PC/About/img/logo.png";
import sfedu from "../../PC/About/img/sfedu.png";
import fpi from "../../PC/About/img/fpi.png";
import ictis from "../../PC/About/img/ictis.png";
import tsl from "../../PC/About/img/tsl.png";

const About = () => {
    return <section className="mob_section about_mob">
        <div className="title_mob"><p>О нас</p></div>
        <div className="block_mob">
            <div className="logo"><img alt="logo" src={logo}/></div>
            <div className="descr">
                <p>ООО “НА ВЗЛËТ”</p>
                <p>ИНН - 6154168220</p>
                <p>ОГРН - 1246100025027</p>
                <p>АДРЕС - 347900, Ростовская область, г. Таганрог, ул. Лесная Биржа, д. 20-б, Офис 9</p>
            </div>
            <div className="partners">
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
    </section>
}
export default About