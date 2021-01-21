import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Topography from '@material-ui/core/Typography';

export default class Header extends Component {
    render() {
        return <AppBar position="static">
            <ToolBar>
                <Topography variant="h6">
                    UI Template 
                </Topography>
            </ToolBar>
        </AppBar>

    }

} 
