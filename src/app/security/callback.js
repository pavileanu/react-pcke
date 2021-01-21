import React from 'react';
import { handleAuthenticationCallback } from './actions'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

export default function Callback() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.security.user);
    if (user) return <Redirect to="/" />
    dispatch(handleAuthenticationCallback());
    return <div>Loading user profile ...</div>
}