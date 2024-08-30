import React from 'react';
import './news-item.css';
import image from '../../../assets/images/office.webp'

const NewsItem: React.FC = () => {

    return (
        <li className="news-item">
            <div className="news-item-wrap">
                <div className="news-item-img">
                    <img src={image} alt="картинка" />
                </div>
                <div className="news-item-info">
                    <div className="news-item-date">30.08.2024</div>
                    <div className="news-item-ttl">Офигенная новость вышла, бежим покупать</div>
                    <div className="news-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eum illo placeat necessitatibus vitae, sed, animi ratione qui dignissimos nisi ipsam ducimus explicabo nemo iste quibusdam distinctio voluptatum itaque ea? Repellat, incidunt laudantium numquam doloremque aspernatur vitae expedita voluptatem sequi et molestiae rem a qui in illo ullam veritatis officia esse, alias ducimus libero. Voluptatibus amet commodi ducimus, libero iste totam natus quia eos velit tenetur dicta sed possimus, doloribus nulla consectetur earum explicabo culpa a aut. Aliquid debitis corrupti laborum sint provident cum magnam, possimus sequi nam similique eos ab dolorem animi? Quidem est placeat unde! Sapiente, exercitationem quas.</div>
                    <div className="news-item-text hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eum illo placeat necessitatibus vitae, sed, animi ratione qui dignissimos nisi ipsam ducimus explicabo nemo iste quibusdam distinctio voluptatum itaque ea? Repellat, incidunt laudantium numquam doloremque aspernatur vitae expedita voluptatem sequi et molestiae rem a qui in illo ullam veritatis officia esse, alias ducimus libero. Voluptatibus amet commodi ducimus, libero iste totam natus quia eos velit tenetur dicta sed possimus, doloribus nulla consectetur earum explicabo culpa a aut. Aliquid debitis corrupti laborum sint provident cum magnam, possimus sequi nam similique eos ab dolorem animi? Quidem est placeat unde! Sapiente, exercitationem quas.</div>
                    <div className="news-item-more">Подробнее</div>
                </div>
            </div>
        </li>
    );
};

export default NewsItem;