import "./featuredInfo.css"
import { ArrowDownward,ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMonyContainer">
                    <span className="feauredMony">$2.215</span>
                    <span className="featuredMoneyRate">
                        -11.125<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>  
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sale</span>
                <div className="featuredMonyContainer">
                    <span className="feauredMony">$2.215</span>
                    <span className="featuredMoneyRate">
                        -1.15<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>  
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMonyContainer">
                    <span className="feauredMony">$22.215</span>
                    <span className="featuredMoneyRate">
                        +14.1<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>  
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    )
}
