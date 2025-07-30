import "./VideoLinks.scss";

const VideoLinks = (props) => {
    return <div className="pc_section video_links one_block">
        <div className="title title_video_links"><p>Видеодемонстрация</p></div>
        <div className="block">
            <div className="video_object">
                <div className="video_title"><p>Модуль конструирования БВС</p></div>
                <iframe title="Волна - модуль конструирования БВС"
                    src="https://rutube.ru/play/embed/20678af3f3b835723de96ad3222cc693" 
                    allow="clipboard-write; autoplay" 
                    allowFullScreen={true}>    
                </iframe>
            </div>
            <div className="video_object">
                <div className="video_title"><p>Модуль управления БВС</p></div>
                <iframe title="Волна - модуль управления БВС"
                    src="https://rutube.ru/play/embed/1cfbde1688b53fea7f18b43b953abf2c" 
                    allow="clipboard-write; autoplay" 
                    allowFullScreen={true}>    
                </iframe>
            </div>
        </div>
    </div>
}

export default VideoLinks