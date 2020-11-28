import React from 'react';
import "themes/main/menu-top.sass"
import {A} from "hookrouter"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClosedCaptioning, faCross, faEquals, faWindowClose} from "@fortawesome/free-solid-svg-icons";

export default function MenuTop(props) {

    return <div className="menu-top">
        {/*<div className="menu-logo"><img src="/logo.svg" className="h-100"/></div>*/}

        <input type="checkbox" id="show-menu" hidden={true}/>
        <label htmlFor="show-menu">
            <div className="toggle-controls">
                <div className="menu-toggle text-right"><FontAwesomeIcon icon={faEquals}/></div>
                <div className="menu-cross text-right"><FontAwesomeIcon icon={faWindowClose}/></div>
            </div>

            <div className={"menu-items"}>
                <div className="menu-item"><A href="/">Начало</A></div>
                {/*<div className="menu-item"><A href="/regions">Регионы</A></div>*/}
                <div className="menu-item"><A href="/directions">Направления</A></div>
                <div className="menu-item"><A href="/documents">Документы</A></div>
                {props.store.authenticatedUser && props.store.authenticatedUser.admin && <div className="menu-item"><A href="/admin">ADM</A></div>}
                {props.store.authenticatedUser && <div className="menu-item"><A href="/cabinet">Кабинет</A></div>}
                {props.store.authenticatedUser && <div className="menu-item"><A href="/logout">Выход</A></div>}
            </div>
        </label>


    </div>
}
