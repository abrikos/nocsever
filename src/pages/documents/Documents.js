import MarkDown from "react-markdown";
import documents from "pages/home/text-documents";
import React from "react";

export default function Documents(){
    return <div className="content">
        <h2>Документы</h2>
        <MarkDown source={documents}/>
    </div>
}
