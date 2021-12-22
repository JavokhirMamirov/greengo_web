/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DashBoardForm from '../DashboardForm';
import { Container, Panel, Tab, TabItem, TimeText } from './DashboardTopBar';
import moment from "moment";
import 'moment-timezone';

const DashBoardTopBar = ({ drivers, dispatchers, operators, boards, SetUpInvoice }) => {
    const [tabItem, setTabItem] = useState('new_trip');



    function changeDatetimeByTimezone(datetime, timezone) {
        const parsedDateAsUtc = moment.utc()
            .startOf('day')
            .add(datetime.substring(0, 2), "hours")
            .add(datetime.substring(3, 5), "minutes");
        return parsedDateAsUtc.clone().tz(timezone).format("HH:MM a");
    }
    var d = new Date();
    var noww = d.getHours() + ":" + d.getMinutes()
    const time = changeDatetimeByTimezone(noww, "America/New_York");

    return (
        <Container>
            <Tab>
                <TabItem className={tabItem === 'new_trip' ? 'active' : null}>NEW TRIP</TabItem>
                <TabItem className={tabItem === 'expences' ? 'active' : null}>EXPENCES</TabItem>
                <TimeText>TIME NOW IN: New York / {time}   <i style={{ paddingLeft: "20px" }}></i>  </TimeText>
            </Tab>
            <Panel>
                <DashBoardForm
                    drivers={drivers}
                    dispatchers={dispatchers}
                    operators={operators} boards={boards}
                    SetUpInvoice={SetUpInvoice}
                />
            </Panel>
        </Container>
    );
}

export default DashBoardTopBar;