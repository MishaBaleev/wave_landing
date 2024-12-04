import "./Contacts.scss";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from "react";

const Contacts = () => {
    //handlers
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYmFsZWV2IiwiYSI6ImNsYXBqNmk4dTE5Y3UzcWxiYmt1bTJtcG8ifQ.aE8lRdfDnWq52szIP7gAHw"
        let map = new mapboxgl.Map({
            container: "map_mob",
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [38.943917, 47.203948],
            zoom: 16,
            minZoom: 2,
            attributionControl: false
        })
        new mapboxgl.Marker({"color": "#ff0000"}).setLngLat([38.943917, 47.203948]).addTo(map)
    }, [])

    return <section className="contacts_mob">
        <div className="title_contacts_mob"><p>Контакты</p></div>
        <ul className="list_mob">
            <li><p>Михайлова Василиса Дмитриевна</p></li>
            <li><p>vmihaylova@sfedu.ru</p></li>
            <li><p>vmihaylova@sfedu.ru</p></li>
        </ul>
        <div className="map_container">
            <div id="map_mob"/>
        </div>
    </section>
}
export default Contacts