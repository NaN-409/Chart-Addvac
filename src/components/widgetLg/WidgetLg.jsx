import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <div className="widgetLgTitle">Latest Transations</div>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/6908079/pexels-photo-6908079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mavluda Halilova</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$153.45</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr> 
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/6908079/pexels-photo-6908079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mavluda Halilova</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$153.45</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr> 
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/6908079/pexels-photo-6908079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mavluda Halilova</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$153.45</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr> 
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/6908079/pexels-photo-6908079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mavluda Halilova</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$153.45</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr> 
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/6908079/pexels-photo-6908079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mavluda Halilova</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$153.45</td>
                    <td className="widgetLgStatus"><Button type="Cleared"/></td>
                </tr> 
            </table>
        </div>
    )
}
