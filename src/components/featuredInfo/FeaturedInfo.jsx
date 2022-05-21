import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { dataFeaturedInfo } from '../../dummyData'

export default function FeaturedInfo(props) {
    const { featuredTitle, featuredMoney, featuredMoneyRate, featuredIcon, featuredSub } = props

    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>{featuredTitle}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{featuredMoney}</span>
                    <span className="featuredMoneyRate">
                        {featuredMoneyRate} <ArrowDownward className=' featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">{featuredSub}</span>
            </div>
        </div>
    )

}