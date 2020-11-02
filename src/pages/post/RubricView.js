import React, {useEffect, useState} from 'react';
import PostList from "pages/post/PostList";
import MyBreadCrumb from "components/MyBreadCrumb";

export default function RubricView(props) {
    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() => {
        props.store.api('/rubric/breadcrumbs', {id: props.id}).then(setBreadcrumb);
    }, [props.id, props.message]);
    const filter = {where: {types: {$in: props.id}}};

    return <div>
        <MyBreadCrumb items={breadcrumb.reverse().map(r => ({label: r.name, href: r.type !== 'options' && `/rubric/${r.id}`}))}/>
        <PostList filter={filter} {...props}/>
    </div>
}
