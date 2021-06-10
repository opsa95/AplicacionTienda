import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector((state) => state); // El estado inicial será false  
    return (
        <Route
            {...rest}
            render={ props => {
                if(isLogged.isLogged) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/' />;
                }
            }}
        />
    );
};

export default ProtectedRoute;
