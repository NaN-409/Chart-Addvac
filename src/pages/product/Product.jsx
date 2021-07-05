import "./product.css"
import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import {productData} from "../../components/dummyData"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <div className="productTitle">Product</div>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7054529/pexels-photo-7054529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="productInfoTopImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                </div>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">No</span>
                </div>
            </div>
        </div>
    )
}
