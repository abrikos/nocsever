import directions from "pages/directions/directions-text";
import MarkDown from "react-markdown";
import React from "react";
import "./directions.sass"

export default function Direction(props) {
    const t = directions[props.field]


    return <div className="page direction-full">
        <div className="top-image"><img src={t.image} alt={t.title}/></div>
        <div className="content">
            <h2>{t.title}</h2>
            Руководитель: <strong>{t.boss.name}</strong> <i>{t.boss.title}</i>

            <h4>Ключевые разработки направления:</h4>
            <ul>
                {t.developments.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <h4>Цели разработок:</h4>
            <ul>
                {t.targets.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <h4>Портфели</h4>
            <MarkDown source={t.portfolio}/>
            <h4>Социально-экономический эффект</h4>
            <MarkDown source={t.effect}/>
            <div>
                <div><MarkDown source={t.text}/></div>
            </div>

        </div>
    </div>
}
