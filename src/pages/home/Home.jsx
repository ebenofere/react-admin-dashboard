import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'

export function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
        </div >
    )
}

export default Home