import { Link } from 'react-router-dom'
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,Person,AddShoppingCart
    ,AttachMoney,Equalizer,Mail,DynamicFeed,Message,LocalMall,Report, Storefront} from '@material-ui/icons'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">DashBoard</h3>
                    <ul className="sideBarList">
                        <Link to="/" className="link">
                        <li className="sideBarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to="/users" className="link">
                        <li className="sideBarListItem active">
                            <Person className="sidebarIcon"/>
                            Users
                        </li>
                        </Link>
                        <Link to="products" className="link">
                        <li className="sideBarListItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sideBarListItem">
                            <Equalizer className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem active">
                            <Mail className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <Mail className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem active">
                            <LocalMall className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
    )
}
