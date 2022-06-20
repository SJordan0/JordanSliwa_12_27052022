import styled from 'styled-components'
import React from 'react';

import { USER_MAIN_DATA } from '../../Service/dataMocked';
import DailyActivity from '../../components/DailyActivity';
import DurationActivity from '../../components/DurationActivity';
import Chart from '../../components/Chart';
import Score from '../../components/Score';
import Stats from '../../components/Stats';

const Main = styled.main`
    margin-left: 125px;
    margin-top: 15px;
    margin-right: 15px;
    position: relative;
    top: -100px;
    height: 565px;
`

const Dashboards = styled.div`
    display: flex;
    justify-content: space-between;
`

const Activity = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 75%;
`



function ProfilPage() {
  return (
    <Main>
        <div>
            <h1>Bonjour {USER_MAIN_DATA[0].userInfos.firstName}</h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
        <Dashboards>
            <Activity>
                <DailyActivity />
                <DurationActivity />
                <Chart />
                <Score />
            </Activity>
            <Stats />
        </Dashboards>
    </Main>
  );
}

export default ProfilPage;
