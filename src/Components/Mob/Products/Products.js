import "./Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import lastochka from '../../PC/Products/img/lastochka.png';
import wave from "../../PC/Products/img/wave.png";
import common from "../../PC/Products/img/common.jpg";
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
            img: lastochka,
            description: `Модуль "Ласточка" предназначен для конструирования полетных заданий с учетом 
                всевозможных факторов окружающей среды. Также данный модуль предоставляет
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
            link: "link"
        }
    ]
    const [cur_slide, setCurSlide] = useState(0)

    //handlers
    const onSlideChange = (e) => {
        setCurSlide(e.activeIndex)
    }
    const changeSlide = (index) => {
        swiper.slideTo(index)
        setCurSlide(index)
    }

    return <section className="mob_section products_mob">
        <div className="title_mob"><p>Продукт</p></div>
        <Swiper 
            onSwiper={setSwiper}
            navigation={true} 
            modules={[Navigation, Autoplay]} 
            loop={true} 
            className="swiper_mob"
            onSlideChange={onSlideChange}
            allowTouchMove={true}>
            {product_cards.map((card, index) => {
                return <SwiperSlide className="swiper_slide" key={index}>
                    <div className="left_sec">
                        <p>{card.description}</p>
                        {card.link?<a href={card.link}>Ссылка</a>:""}
                    </div>
                    <div className="right_sec">
                        <div className="gradient"/>
                        <img src={card.img}/>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
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