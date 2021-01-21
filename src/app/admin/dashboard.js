import React, { Component } from 'react';
import Header from '../common/header';
import Settings from '../common/settings'
import logout from '../security/logout'
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux'

export default function Dashboard() {
        const user = useSelector(state => state.security.user);
        return <React.Fragment>
            <Header />
            <h3>Dashboard</h3>
            <Button onClick={() => logout(user)}>Log out</Button>
            <h2>User </h2>
            <pre>
                {JSON.stringify(user)}
            </pre>
            <h2>Settings</h2>
            <pre>
                {JSON.stringify(Settings)}
            </pre>
        </React.Fragment>
}
