import React, { Fragment } from 'react';
import Router from './common/router';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import Theme from './common/theme';

export default function App() {
    return (<Fragment>
        <CssBaseline />
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>)
}