import React, {useEffect, useState} from 'react';
import Store from "Store"
import MyBreadCrumb from "components/MyBreadCrumb";
import ErrorPage from "components/service/ErrorPage";
import "./cabinet.sass"

export default function Cabinet(props) {
    const [user, setUser] = useState();

    useEffect(loadUser, []);

    function loadUser() {
        Store.api('/post/999/view')
            .then(d => {
                console.log('zzzzzzzzzzzz', d)
                setUser(d)
            })
        //.catch(console.warn)
    }

    console.log(props.store)

    if (!props.store.authenticatedUser) return <ErrorPage {...{error: 403, message: 'Доступ запрещен'}}/>;
    return <div>
        <MyBreadCrumb items={[
            {label: 'Кабинет'},
            {label: 'Буфет', href: '/zzzzz'},
        ]}/>
        Gogo9999
        {JSON.stringify(user)}

    </div>

}

