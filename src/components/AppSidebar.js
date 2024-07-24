// src/Sidebar.js

import React from 'react';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import "../App.css"
const AppSidebar = () => {

    return (
        <Sidebar>
        <Menu>
            <div className='sbar'>
            <MenuItem component={<Link to="/" />}>Chat</MenuItem>
            <MenuItem component={<Link to="/bar" />}>Stats</MenuItem>
            </div>
        </Menu>
        </Sidebar>
    );
};

export default AppSidebar;
