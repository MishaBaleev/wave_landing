import "./Modal.scss";
import { connect } from "react-redux";
import { updateModal } from "../../../AppSlice";
import { useEffect } from "react";

const Modal = (props) => {
    //handlers
    useEffect(() => {
        setTimeout(() => {
            props.updateModal({title: "", message: "", status: ""})
        }, 5000)
    }, [])

    return <div className={"modal "+props.app.modal.status}>
        <div className="mod_title"><p>{props.app.modal.title}</p></div>
        <div className="mod_descr"><p>{props.app.modal.message}</p></div>
    </div>
}

const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch) => {return {
    "updateModal": (data) => {dispatch(updateModal(data))}
}}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)