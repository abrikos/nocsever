import React, {useEffect, useState} from "react";
import data from "./map-data"
import MarkDown from "react-markdown";

export default function Map() {
    const [region, setRegion] = useState()

    useEffect(() => {
        /*document.getElementById('#yakutia').addEventListener('click', function(e) {
            e.currentTarget.setAttribute('fill', '#ff00cc');
        });*/
    }, [])

    return <div className="d-none d-sm-flex">
        <h2>Регионы</h2>
        <div className="text-center">Общая площадь регионов участников {data.reduce((a, b) => a + (b.square || 0), 0).toLocaleString('ru')} км<sup>2</sup></div>
        <div className="row">

            <div className="col-6 text-right">

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

                {region ? region.name && <div>

                    <h3>{region.name}</h3>
                    <img src={region.emblem} height={300} className="float-left m-4"/>
                    <MarkDown source={region.about}/>
                    Площадь: {region.square.toLocaleString('ru')} км<sup>2</sup>
                </div>:<div>
                    {data.map(d=><h3 key={d.id}>{d.name}</h3>)}
                </div>}
            </div>


        </div>
    </div>
}
