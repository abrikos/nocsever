import React from "react";
import "./partners.sass"

export default function Partners(){

    function getStyle(x,y){
        return {clipPath: "polygon(0px 0px, 100px 50xp, 50px 100px, 0px 50px)"}
    }
    const partners = [
        {label:"Алроса", img:"alrosa.gif", url:"http://www.alrosa.ru", section:0},
        {label:"Анабар", img:"anabar.jpg", url:"http://alanab.ykt.ru", section:0},
        {label:"GV GOLD", img:"gv-gold.jpg", url:"/", section:0},
        {label:"ИГАБМ", img:"igabm.png", url:"http://diamond.ysn.ru", section:1},
        {label:"Колмар",img:"kolmar.png", url:"http://www.kolmar.ru", section:1},
        {label:"Меднаука", img:"mednauka.png", url:"https://mednauka.com", section:2},
        {label:"Росатом", img:"rosatom.svg", url:"http://www.armz.ru", section:2},
        {label:"Селигдар", img:"seligdar.jpg", url:"https://seligdar.ru", section:2},
        {label:"СВФУ", img:"svfu.png", url:"https://www.s-vfu.ru", section:2},
        {label:"Якутскэнерго", img:"yakutskenergo.png", url:"https://www.yakutskenergo.ru", section:2},
    ]


    return <div className="industrial-partners">
        <h2>Партнеры</h2>
        <div className="partner-grid">
            {partners.map((img,k)=><div key={k} className="partner-cell"><a href={img.url}  target="_blank">
                <img src={`/industrial-partners/${img.img}`} alt={img.label} className="img-fluid"/>
            </a></div>)}
        </div>
    </div>
}
