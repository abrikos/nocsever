import React, {useEffect, useState} from "react";
import data from "./map-data"

export default function Map() {
    const [region, setRegion] = useState()

    useEffect(() => {
        /*document.getElementById('#yakutia').addEventListener('click', function(e) {
            e.currentTarget.setAttribute('fill', '#ff00cc');
        });*/
    }, [])

    return <div>

        <div className="row d-none d-sm-flex">
            <div className="col-6">
                <svg width={600} height={600} viewBox="3000 5000 15742.709 15478.125">
                    <style>
                        {`.region:hover {opacity:1;}`}
                        {`.region {opacity:.5;}`}
                        {`.disabled {opacity:.5;}`}
                    </style>
                    {data.map(d => <g key={d.id} id={d.id} className={d.noTransform ? "disabled" : "region"} transform={d.transform} onMouseOver={() => setRegion(d)} onMouseOut={()=>setRegion(null)}>
                        {d.path.map((p, i) => <path key={i} d={p} fill={d.fill}/>)}
                    </g>)}
                </svg>
            </div>
            <div className="col-6">
                Общая площадь {data.reduce((a, b) => a + (b.square || 0), 0).toLocaleString('ru')} км<sup>2</sup>
                {region && region.name && <div>
                    <h3>{region.name}</h3>
                    Площадь: {region.square.toLocaleString('ru')} км<sup>2</sup>
                </div>}
            </div>


        </div>
    </div>
}
