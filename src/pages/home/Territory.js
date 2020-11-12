import React from "react";

export default function Territory(){
    return <div>
        <h2>Территория НОЦ</h2>
        <div className="d-flex map-container">
            <div><img src="/map.svg" alt="Карта регионов"/></div>
            <div>
                <dl>
                    <dt>Общая площадь (65,3% территории ДФО)</dt>
                    <dd><span className="digit">4 542</span> тыс. км<sup>2</sup></dd>
                    <dt>Доля в ВРП Дальнего Востока</dt>
                    <dd><span className="digit">54,5</span>%</dd>
                    <dt>Население</dt>
                    <dd><span className="digit">1 963,7</span> тыс. чел</dd>
                </dl>
                Природные ресурсы мирового значения:
                <ul>
                    <li>золото</li>
                    <li>нефть</li>
                    <li>газ</li>
                    <li>алмазы</li>
                    <li>уголь</li>
                    <li>редкоземельные металлы</li>
                    <li>биоресурсы</li>
                </ul>
            </div>
        </div>
    </div>
}
