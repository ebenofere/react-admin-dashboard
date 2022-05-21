import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import { dataFeaturedInfo } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className='home'>
            <div className="featured">
                {dataFeaturedInfo.map(({ id, featuredTitle, featuredMoney, featuredMoneyRate, featuredIcon, featuredSub }) => (
                    < FeaturedInfo key={id} featuredTitle={featuredTitle} featuredMoney={featuredMoney} featuredMoneyRate={featuredMoneyRate} featuredIcon={featuredIcon} featuredSub={featuredSub} />
                ))}
            </div>
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}