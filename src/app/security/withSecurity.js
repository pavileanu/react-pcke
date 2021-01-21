import React from 'react'
import { useSelector } from 'react-redux'
import { login } from './login'

export default (ComposedComponent) => props => {
    const user = useSelector(state => state.security.user);
    if (user)
        return <ComposedComponent {...props} />;
    else {
        login();
        return null;
    }
};