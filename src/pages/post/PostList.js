import React, {useEffect, useState} from 'react';
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
        f.limit = 4;
        f.skip = 0;
        if (!props.isAdmin) f.where.published = true;
        setFilter(f);
        props.store.api('/post/list', f).then(res => {
            console.log(res)
            setPosts(res.list)
            setTotalCount(res.count);
        });
    }

    function pageChange(f) {
        props.store.api('/post/list', f).then(res => setPosts(res.list));
    }

    if (!posts) return <Loader/>
    return <div className="post-list">

        <div className="d-sm-flex flex-wrap justify-content-center">
            {posts.map(p => <div key={p.id} className="post-small">
                {console.log(p.header, p)}
                <div className="post-container">
                    <div className="image-wrapper" style={{backgroundImage: `url(${p.previewPath})`}}>
                        <div className="post-link">
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                            <img src={p.previewPath} alt={p.header} className="img-fluid d-sm-none"/>
                            <span>{p.header}</span>
                        </a>
                        </div>
                    </div>
                    <div className="post-gradient">
                    </div>

                </div>
            </div>)}
        </div>
        {filter && !!totalCount && <Pager count={totalCount} filter={filter} onPageChange={pageChange}/>}
    </div>
}
