import LineChartCard from "./Charts/LineChart";
import BarChartCard from "./Charts/BarChart";
import GroupBarChartCard from "./Charts/GroupBarChart";
import AccountWatchListCard from "./Charts/AccountWatchList";
import './Content.css';
import './Card.css';

function Content({ linearData, barData, groupData, accoutData }) {

    return (
        <div className="content">
            <div className="card-container">
                <LineChartCard linearData={linearData} />
                <BarChartCard barData={barData} />
                <GroupBarChartCard groupData={groupData} />
                <AccountWatchListCard accoutData={accoutData} />
            </div>
        </div>
    );

}

export default Content;


// import Card from "./Card";
// import './Content.css';

// function Content() {

//     return (
//         <div className="content">
//             <div className="card-container">
//                 <Card heading={'Checking Account'} button={['Manage', 'January']} chartType='LineChart' />
//                 <Card heading='Invoices owed to you' button={['New Sales Invoice']} chartType='BarChart' />
//                 <Card heading='Total Cash Flow' button={['In', 'Out']} chartType='ClusteredBarChart' />
//                 <Card heading={'Account WatchList'} button={[]} chartType='Account WatchList' />
//             </div>
//         </div>
//     );

// }

// export default Content;