import {useRoutes} from "hookrouter";
import routes from "Routes";
import ThemeMain from "components/themes/main/ThemeMain";
import ThemeAdmin from "components/themes/admin/ThemeAdmin";
import React, {useEffect, useState} from "react";
import Store from "Store";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Application() {
    const [authenticatedUser, setAuthUser] = useState(false);

    useEffect(() => {
        //let isSubscribed = true
        //startWebSocket();
        //setInterval(checkWebsocket, 1000);
        Store.getUser()
            .then(setAuthUser)

        //return () => isSubscribed = false;
        //const t = params.getCookie('theme');
    }, []);

    const store = {
        authenticatedUser,
    }

    let routeResult = useRoutes(routes(store));
    const admin = window.location.pathname.match(/^\/editor/);
    return (
        <div className="App">
            {!admin && <ThemeMain routeResult={routeResult} store={store}/>}
            {admin && <ThemeAdmin routeResult={routeResult} store={store}/>}
        </div>
    );
}
