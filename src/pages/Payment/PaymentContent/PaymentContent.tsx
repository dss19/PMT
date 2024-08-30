import React from "react";
import './payment-content.css';


const PaymentContent: React.FC = () => {

    return (
        <div className="payment-content">
            <div className="payment-block">
                <h3 className="payment-ttl">Условия оплаты</h3>
                <p className="payment-text">Оплата производится исключительно по безналичному расчету с НДС на основании выставленного счета.</p>
                <p className="payment-text">Счет выставляется после оформления заказа на сайте, по телефону или отправке заявки на E-mail.</p>
                <p className="payment-text">Оплата по счету принимается только от юридических лиц и индивидуальных предпринимателей.</p>
                <p className="payment-text">Все платежные документы предоставляются в установленном порядке, согласно законодательству РФ. Возможна работа по индивидуально согласованным условиям.</p>
                <p className="payment-text">За более детальной информацией Вы можете обратиться к нашим менеджерам по телефону <a href="tel:+78005117128" className="payment-contact">8-800-511-71-28</a> либо написав нам на электронную почту <a href="mailto:info@pnevmo-torg.ru" className="payment-contact">info@pnevmo-torg.ru</a></p>
            </div>
            <div className="payment-block">
                <h3 className="payment-ttl">Условия доставки</h3>
                <h4 className="payment-subttl">Бесплатно</h4>
                <ul className="payment-list">
                    <li className="payment-delivery">Самовывоз со склада в Пензе, ул. Гражданская 20</li>
                    <li className="payment-delivery">Доставка до терминалов тренспортных компаний в Пензе <span>при заказе на сумму свыше 10000 р.</span></li>
                    <li className="payment-delivery">Возможна доставка транспортной компанией до Вашего склада или терминала в Вашем городе за наш счет <span>(обсуждается индивидуально)</span>.</li>
                </ul>
                <h4 className="payment-subttl">Оплачивается покупателем</h4>
                <ul className="payment-list">
                    <li className="payment-delivery">Доставка до терминалов транспортных компаний <span>при заказе на сумму менее 10000 р.</span></li>
                    <li className="payment-delivery">Услуги транспортной компании по доставке от терминала в г. Пенза до вашего города</li>
                </ul>
                <h4 className="payment-subttl">Рассчитать стоимость доставки:</h4>
                <ul className="payment-list">
                    <li className="payment-delivery">«Деловые Линии» - <a href="https://www.dellin.ru/requests/?step=freight&requestType=cargo-single" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«ЖелДорЭкспедиция» - <a href="https://penza.jde.ru/online/calculator.html" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«ПЭК» - <a href="https://pecom.ru/services-are/shipping-request/" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«Кит» - <a href="https://tk-kit.ru/order" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«СДЭК» - <a href="https://cdek.promo/kalkulyator" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«Байкал Сервис» - <a href="https://request.baikalsr.ru/calculator/" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                    <li className="payment-delivery">«Энергия» - <a href="https://nrg-tk.ru/client/calculator/iframe/" className="payment-link" rel="noreferrer" target="_blank">калькулятор</a></li>
                </ul>
            </div>
        </div>
    )
};

export default PaymentContent;