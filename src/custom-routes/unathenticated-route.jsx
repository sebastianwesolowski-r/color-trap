import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const UnauthenticatedRoute = ({component: Component, appProps, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            !appProps.session ? (
                <Component {...props} {...appProps} />
            ) : (
                <Redirect to="/board" />
            )
        }
    />
);

export default UnauthenticatedRoute;