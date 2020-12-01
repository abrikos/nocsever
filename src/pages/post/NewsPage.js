import React from "react";
import PostList from "pages/post/PostList";
import Pager from "components/Pager";

export default function NewsPage(props) {
    const filter = {where: {published: true, isMassMedia: {$ne: true}}};
    return <div className="container">
        <h2>Новости</h2>
        <PostList filter={filter} {...props} pager/>
        {/*<hr/>
        <h2>Видео</h2>
        <VideoList {...props}/>*/}
    </div>
}
