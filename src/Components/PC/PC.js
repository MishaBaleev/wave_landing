import "./PC.scss";
import '@fontsource-variable/jetbrains-mono';
import ParticlesBg from "particles-bg";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Services from "./Sevices/Services";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Order from "./Order/Order";
import { connect } from "react-redux";
import { updateModal } from "../../AppSlice";
import { useEffect } from "react";
import Modal from "./Modal/Modal";

const PC = (props) => {
    //state 

    //handlers
    const gotoSection = (selector) => {
        const element = document.querySelector(selector)
        element.scrollIntoView({behavior: 'smooth'})
    }
    useEffect(() => {
        document.querySelector(".particles-bg-canvas-self").classList.add("background")
    }, [])

    return <div className="pc">
        <ParticlesBg type="cobweb" bg={true} color="#B9CAEA"/>
        {props.app.modal.title !== ""?<Modal/>:""}
        <Header gotoSection={gotoSection}/>
        <main className="pc_main">
            <Products/>
            <Services/>
            <Order/>
            <About/>
        </main>
        <Contacts/>
    </div>
}
const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch) => {return {
    "updateModal": (data) => {dispatch(updateModal(data))}
}}
export default connect(mapStateToProps, mapDispatchToProps)(PC)