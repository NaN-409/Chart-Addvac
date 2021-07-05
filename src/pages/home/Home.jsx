import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import UserList from "../userList/UserList"
import "./home.css"
import {userData} from "../../components/dummyData"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
            <div className="homeWidgets" >
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
