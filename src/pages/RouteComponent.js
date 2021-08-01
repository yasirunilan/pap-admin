import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useCookies} from 'react-cookie';

function RouteComponent({children, ...rest}) {
    let [cookies, setCookie, removeCookie] = useCookies();

    return (
        <Route {...rest} render={({location}) =>
            cookies.logged_in_state === 'LOGGED_IN' || !rest.secured ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: location}
                    }}
                />
            )
        }/>
    )
}

export default RouteComponent;
