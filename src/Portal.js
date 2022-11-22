import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
function Portal() {

    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div class="container-fluid">
                      <Outlet/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Portal