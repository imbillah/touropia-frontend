import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth'

function PrivateRoute({children, ...rest}) {
    const { user, isLoading } = useAuth();
    if(isLoading) {
        return (
            <div className ='container text-center'>
                <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
}

export default PrivateRoute;