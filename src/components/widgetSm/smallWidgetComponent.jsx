import './widgetSm.css'
import { Visibility } from '@material-ui/icons'

export default function SmallWidget(props) {
    const { url, username, title, icon } = props
    return (
        <li className="widgetSmListItem">
            <img src={url} alt='' className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">{username}</span>
                <span className="widgetSmUserTitle">{title}</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' /> {icon}
            </button>
        </li>
    )
}