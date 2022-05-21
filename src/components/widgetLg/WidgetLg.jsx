import './widgetLg.css'
import BigComponent from './bigWidgetComponent'
import { dataBigWidget } from '../../dummyData'

export default function WidgetLg() {

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {
                    dataBigWidget.map(({ id, url, username, date, amount, status }) => (
                        <BigComponent key={id} url={url} username={username} date={date} amount={amount} status={status} />
                    ))
                }
            </table>
        </div>
    )
}