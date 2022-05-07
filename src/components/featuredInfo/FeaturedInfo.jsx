import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,500</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,000</span>
                    <span className="featuredMoneyRate">
                        -67.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$11,800</span>
                    <span className="featuredMoneyRate">
                        -40.0 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}