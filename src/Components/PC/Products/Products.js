import "./Products.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import wave from "./img/wave.png";
import common from "./img/common.jpg";
import wave_prog from "./img/wave_prog.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const Products = () => {
    //state
    const [swiper, setSwiper] = useState(null)
    const product_cards = [
        {   
            img: common, 
            description: `В рамках выполнения проекта было разработано 
                несколько модулей, выполняющих различные задачи. Так, командой 
                проекта был разработан модуль создания и реадктирования полетного 
                задания с возможностью отправки его на БПЛА. Также отдельно был разработан 
                модуль конструирования БПЛА с системой рекомендаций пользователю по подбору 
                наиболее подходящих комплектующих.`
        },
        {
            img: wave_prog,
            description: `Модуль "Волна" предназначен для конструирования полетных заданий с возможностью 
                тестирования неблагоприятных воздейтсвий. Также данный модуль предоставляет
                пользователю возможности по отслеживанию и управлению БПЛА в режиме реального времени, 
                что дополяется функцией записи событий полета для дальнейшего исследования. 
                Модуль предоставляется после осуществления покупки. Для приобретения ПО оставьте заявку в форме ниже.`
        },
        {
            img: wave,
            description: `Модуль "Волна" предназначен для подобора наиболее подходящих комплектующих 
                для конструируемого БПЛА с учетом большого количества характеристик. Модуль направлен не только на конструирование БПЛА, но и на обучение 
                пользователя тонкостям сборки устройств, что отражено в различного рода инфографике, 
                представленной в ресурсе. Модуль предоставляется бесплатно по ссылке ниже.`,
            link: "http://t99537qz.beget.tech/"
        }
    ]
    const [cur_slide, setCurSlide] = useState(0)

    //handlers
    const mouseOver = (e) => {
        swiper.autoplay.stop()
    }
    const mouseOut = (e) => {
        swiper.autoplay.start()
    }
    const onSlideChange = (e) => {
        setCurSlide(e.activeIndex)
    }
    const changeSlide = (index) => {
        swiper.slideTo(index)
        setCurSlide(index)
    }

    return <section className="pc_section products slider">
        <div className="title title_products"><p>Продукт</p></div>
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Swiper 
                onSwiper={setSwiper}
                navigation={true} 
                modules={[Navigation, Autoplay]} 
                loop={true} 
                autoplay={{delay: 5000}}
                className="swiper"
                onSlideChange={onSlideChange}
                allowTouchMove={false}>
                {product_cards.map((card, index) => {
                    return <SwiperSlide className="swiper_slide" key={index}>
                        <div className="card">
                            <div className="left_sec">
                                <p>{card.description}</p>
                                {card.link?<a href={card.link}>Ссылка</a>:""}
                            </div>
                            <div className="right_sec">
                                <div className="gradient"/>
                                <img src={card.img}/>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
        <div className="circles">
            {product_cards.map((_, index) => {
                return <div 
                    key={index} 
                    className={index===cur_slide?"active":""}
                    onClick={() => {changeSlide(index)}}
                />
            })}
        </div>
    </section>
}
export default Products