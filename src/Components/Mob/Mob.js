import "./Mob.scss";
import { useEffect } from "react";
import '@fontsource-variable/jetbrains-mono';
import ParticlesBg from "particles-bg";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Order from "./Order/Order";
import { connect } from "react-redux";
import { updateModal } from "../../AppSlice";
import Modal from "./Modal/Modal";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const Mob = (props) => {
    //handlers
    useEffect(() => {
        document.querySelector(".particles-bg-canvas-self").classList.add("background")
    }, [])
    const gotoSection = (selector) => {
        const element = document.querySelector(selector)
        element.scrollIntoView({behavior: 'smooth'})
    }

    return <div className="mob">
        <ParticlesBg type="cobweb" bg={true} color="#B9CAEA"/>
        {props.app.modal.title !== ""?<Modal/>:""}
        <Header gotoSection={gotoSection}/>
        <main className="mob_main">
            <Products/>
            <Services/>
            <Order/>
            <About/>
            <Contacts/>
        </main>
    </div>
}
const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch) => {return {
    "updateModal": (data) => dispatch(updateModal(data))
}}
export default connect(mapStateToProps, mapDispatchToProps)(Mob)