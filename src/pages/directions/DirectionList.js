import directions from "pages/directions/directions-text";
import React from "react";
import {A} from "hookrouter"
import "./directions.sass"

export default function DirectionList() {

    function DrawDirectionShort(p) {
        const t = directions[p.field]
        return <div className="direction-item">
            <div className="dir-wrap">
                <div className="text-center">
                    <A href={`/directions/${p.field}`}>
                    <img src={t.image} className="img-fluid d-block m-auto" alt={t.title}/>
                    {t.title}</A>
                </div>
            </div>
        </div>
    }


    return <div className="">
        <h2>Направления</h2>
        <div className="directions-list d-sm-flex">
            {Object.keys(directions).map((k) => <DrawDirectionShort key={k} field={k}/>)}
        </div>
    </div>
}
