import React from "react";

export default function Partners(){

    function getStyle(x,y){
        return {clipPath: "polygon(0px 0px, 100px 50xp, 50px 100px, 0px 50px)"}
    }
    const images = [
        {label:"ЯНЦ", url:"http://prez.ysn.ru/", section:0},
        {label:"ИГАБМ СО РАН", url:"http://diamond.ysn.ru/", section:0},
        {label:"Институт мерзлотоведения", url:"https://mpi.ysn.ru/ru/", section:0},
        {label:"СВКНИИ", url:"http://neisri.ru/", section:1},
        {label:"Арктика", url:"https://arktika.north-east.ru/", section:1},
        {label:"МГУ", url:"https://www.msu.ru/en/", section:2},
        {label:"МФТИ", url:"https://mipt.ru/", section:2},
        {label:"СВФУ", url:"https://www.s-vfu.ru/", section:2},
        {label:"Крас ГМУ", url:"https://krasgmu.ru/", section:2},
        {label:"арктический агротехнологический университет", url:"http://www.agatu.ru/", section:2},
        {label:"Сахалинский университет", url:"http://sakhgu.ru/", section:2},
        {label:"СВГУ Магадан", url:"http://www.svgu.ru/", section:2},
        {label:"Камчатский университет", url:"http://www.kamgu.ru/", section:2},
        {label:"ЯКУТНИПРОАЛМАЗ", url:"", section:3},
        {label:"ЯПНИИС", url:"http://www.ynalrosa.ru/", section:3},
        {label:"ЯНЦ медпроблем", url:"https://mednauka.com/", section:3},
    ]

    const sections = [
        'Институты СО РАН',
        'Институты ДВО РАН',
        'Университеты',
        'Отраслевые институты',
    ]

    return <div className="sc-partners">
        <h2>Научно-технологический потенциал</h2>
        {sections.map((section, i)=><div key={i}>
            <h3 className="blue-box">{section}</h3>
            <div className="logos">
            {images.map((img,k)=>img.section===i && <a href={img.url} key={k} target="_blank">
                <img src={`/sc-partners/${k + 1}.png`} alt={img.label}/>
            </a>)}
            </div>
        </div>)}
    </div>
}
