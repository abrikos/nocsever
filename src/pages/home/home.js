import React from 'react';
import "./home.sass"
import PostList from "pages/post/PostList";
import MarkDown from "react-markdown";
import documents from "pages/home/text-documents";
import comments from "pages/home/text-comments";
import Partners from "pages/home/Partners";
import Documents from "pages/documents/Documents";
import Regions from "pages/home/Regions";
import Map from "pages/home/Map";
import DirectionList from "../directions/DirectionList";
/*
https://academia.interfax.ru/ru/news/articles/2900/
https://nauka.tass.ru/nauka/6770258
http://www.1sn.ru/234318.html
https://yk24.ru/index/nauka/nauchno-obrazovatelnyij-czentr-sever-planiruyut-sozdat-v-yakutske
https://yakutia.info/article/193575
https://glava.sakha.gov.ru/news/front/view/id/3236165
*/

export default function Home(props) {

    return <div className="home">
        <div className="top-cover">
            <div><img src="/logo.svg" alt="Логотип"/> </div>
            <h1>НОЦ "Север: территория устойчивого развития"</h1>
        </div>
        <div className="contentX">


            <div className="py-sm-5"><DirectionList {...props}/></div>
            <div className="py-sm-5"><PostList filter={{limit:20}} {...props}/></div>
            <Partners/>

            <Map/>
            {/*<Regions/>*/}
            {/*<Partners/>*/}



            <hr/>
            <div className="comments">

                <div className="d-sm-flex justify-content-center">
                    {comments.map((c, i) => <div className="comment" key={i}>
                        <div className="img-wrapper">
                            <img src={c.photo} alt={c.name}/>
                        </div>
                        <h4>{c.name} <small><i>{c.title}</i></small></h4>
                        {/*<div>{c.text}</div>*/}
                        <h3><a href={c.pdf} target="_blank">Указ</a></h3>
                    </div>)}
                </div>
            </div>
        </div>


    </div>
}




