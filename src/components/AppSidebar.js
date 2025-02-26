// src/Sidebar.js

import React from 'react';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import "../App.css"
import LogoutButton from './LogoutButton';
const AppSidebar = () => {

    return (
        <Sidebar>
        <Menu>

            <MenuItem component={<Link to="/home" />}>Chat</MenuItem>
            <MenuItem component={<Link to="/bar" />}>Activity</MenuItem>
            <LogoutButton />
        </Menu>
        </Sidebar>
    );
};

export default AppSidebar;
