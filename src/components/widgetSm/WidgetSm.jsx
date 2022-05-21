import './widgetSm.css'
import { dataSmallWidget } from '../../dummyData'
import SmallWidget from './smallWidgetComponent'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {
                    dataSmallWidget.map(({ id, url, username, title, icon }) => (
                        <SmallWidget key={id} url={url} username={username} title={title} icon={icon} />
                    ))
                }
            </ul>
        </div>
    )
}