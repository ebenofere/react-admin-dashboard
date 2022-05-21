import './widgetLg.css'


export default function BigComponent(props) {
    const { url, username, date, amount, status } = props;

    const Button = ({ type }) => {
        return (
            <button className={`widgetLgButton ${type}`}>{type}</button>
        )
    }

    return (
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={url} alt="" className='widgetLgImg' />
                <span className="widgetLgName">{username}</span>
            </td>
            <td className="widgetLgDate">{date}</td>
            <td className="widgetLgAmount"> {amount}</td>
            <td className="widgetLgStatus">
                <Button type={status} />
            </td>
        </tr>
    )
}