import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings } from "@material-ui/icons";


export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Advokat</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src="https://images.pexels.com/photos/5668789/pexels-photo-5668789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvaar" />
                </div>
            </div>
        </div>
    )
}
