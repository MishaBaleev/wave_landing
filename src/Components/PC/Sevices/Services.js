import "./Services.scss";
import demo_school from "./img/demo_school.png";

const Services = () => {
    return <section className="pc_section services one_block">
        <div className="title title_services"><p>Услуги</p></div>
        <div className="block">
            <div className="left_sec">
                <p>
                    Школа для детей с 7 по 11 класс и студентов колледжа. 
                    В школе мы буем изучать БПЛА, как их проектировать, собирать и управлять. 
                    Будем изучать 3D моделирование, использовать симуляторы для получения 
                    навыков пилотирования и с помощью нашей платформы будем обучать детей собирать 
                    БПЛА, задавать им полётное задание и настраивать/тестировать работоспособность 
                    БПЛА и анализировать полётное задание на основе логов БПЛА. По итогу 
                    школы у каждого ученика появится свой работоспобный БПЛА, сертификат
                    о прохождения курса от Южного федерального университета и бесценные 
                    навыки и знания в сфере БАС. Информация о записи в школу будет позже. 
                    Стоимость школы будет обозначена за неделю до регистрации. 
                    Продолжительность обучения 4 месяца, занятия проходят 2 раза в неделю.
                </p>
            </div>
            <div className="right_sec">
                <div className="gradient"/>
                <img src={demo_school}/>
            </div>
        </div>
    </section>
}
export default Services