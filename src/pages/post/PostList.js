import React, {useEffect, useState} from 'react';
import Store from "Store"
import Pager from "components/Pager";
import Loader from "components/Loader";
import "./post.sass"

export default function PostLIst(props) {
    /*this.propTypes = {
        filter: PropTypes.object,
    };*/

    const [posts, setPosts] = useState();
    const [totalCount, setTotalCount] = useState();
    const [filter, setFilter] = useState(props.filter);

    useEffect(init, [filter, props]);

    function init() {
        const f = filter ? Object.assign(filter, {}) : {where: {}};
        if (!f.where) f.where = {};
        f.order = {createdAt: -1};
        f.limit = 12;
        f.skip = 0;
        if (!props.isAdmin) f.where.published = true;
        setFilter(f);
        Store.api('/post/list', f).then(res => {
            console.log(res)
            setPosts(res.list)
            setTotalCount(res.count);
        });
    }

    function pageChange(f) {
        Store.api('/post/list', f).then(res => setPosts(res.list));
    }

    if (!posts) return <Loader/>
    return <div className="post-list">
        <h2>Новости</h2>
        <div className="d-sm-flex flex-wrap">
            {posts.map(p => <div key={p.id} className="post-small">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <div className="img-wrapper">
                        <img src={p.previewPath} alt={p.header} className="img-fluid"/>
                    </div>
                    <span>{p.header}</span>
                </a>
            </div>)}
        </div>
        {filter && !!totalCount && <Pager count={totalCount} filter={filter} onPageChange={pageChange}/>}
    </div>
}
