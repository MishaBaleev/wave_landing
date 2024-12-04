import "./Order.scss";
import { connect } from "react-redux";
import axios from "axios";
import { updateModal } from "../../../AppSlice";
import delivery from "./img/delivery.jpg";

const Order = (props) => {
    //handlers
    const validateInput = (data) => {
        if (data.name === "" || data.email === "" || data.message === ""){return false}
        else{return true}
    }
    const sendMessage = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        formData.append("access_key", "26e3c975-c653-4e31-8f71-91b0a3596b11");

        const object = Object.fromEntries(formData);
        if (validateInput(object) === true){
            let key = "6jqrw5i78ui1bfjkpx35t5q4f4zbxuusufq45uge"
            let order = `<div><p>Заказ</p><p>ФИО - ${object.name}</p><p>Контакты - ${object.email}</p><p>Комментарий - ${object.message}</p></div>`
            let url = `https://api.unisender.com/ru/api/sendEmail?format=json&api_key=${key}&email=root.root.75@mail.ru&sender_name=ORDER&sender_email=baleev@sfedu.ru&subject=ORDER&body=${order}&list_id=1&lang=ru&error_checking=1`
            axios.post(url).catch(error => {console.log(error)})
            props.updateModal({title: "Успех", message: "Заявка на получение ПО отправлена", status: "good"})
        }else{
            props.updateModal({title: "Ошибка", message: "Все поля формы заказа должны быть заполнены", status: "bad"})
        }
    }

    return <section className="mob_section order_mob">
        <div className="title_mob"><p>Заказать ПО</p></div>
        <div className="block_mob">
            <form onSubmit={sendMessage}>
                <div className="input_item">
                    <div className="label"><p>Фамилия, имя, отчество</p></div>
                    <input type="text" placeholder="Начните печатать..." name="name"/>
                </div>
                <div className="input_item">
                    <div className="label"><p>Email/номер телефона для связи</p></div>
                    <input type="text" placeholder="Начните печатать..." name="email"/>
                </div>
                <div className="input_item">
                    <div className="label"><p>Комменатрий к заявке</p></div>
                    <textarea name="message" placeholder="Начите печатать..."/>
                </div>
                <button className="save" type="submit">Отправить</button>
            </form>
            <div className="img">
                <div className="gradient"/>
                <img src={delivery} alt="delivery"/>
            </div>
        </div>
    </section>
}
const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch) => {return {
    "updateModal": (data) => dispatch(updateModal(data))
}}
export default connect(mapStateToProps, mapDispatchToProps)(Order)