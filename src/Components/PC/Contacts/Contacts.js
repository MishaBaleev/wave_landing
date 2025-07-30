import "./Contacts.scss";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from "react";

const Contacts = () => {
    //state 

    //handlers
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYmFsZWV2IiwiYSI6ImNsYXBqNmk4dTE5Y3UzcWxiYmt1bTJtcG8ifQ.aE8lRdfDnWq52szIP7gAHw"
        let map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [38.943917, 47.203948],
            zoom: 16,
            minZoom: 2,
            attributionControl: false
        })
        new mapboxgl.Marker({"color": "#ff0000"}).setLngLat([38.943917, 47.203948]).addTo(map)
    }, [])

    return <section className="contacts">
        <div className="gradient"></div>
        <div className="contacts_main">
            <div className="main_window">
                <div className="title_contacts"><p>Контакты</p></div>
                <div className="map_name">
                    <div id="map"/>
                    <ul className="list">
                        <li><p>Михайлова Василиса Дмитриевна</p></li>
                        <li><p>vmihaylova@sfedu.ru</p></li>
                        <li><p>+7 (995) 379 66 25</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}
export default Contacts