import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import DailyActivity from '../../components/DailyActivity';
import DurationActivity from '../../components/DurationActivity';
import Chart from '../../components/Chart';
import Score from '../../components/Score';
import Stats from '../../components/Stats';
import React, { useEffect, useState } from "react"
import { userDataModel, activityDataModel, averageDataModel, performanceDataModel } from "../../models";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../../Service/dataMocked';
import { dataMocked } from '../../Service/config';

const Main = styled.main`
    margin-left: 125px;
    margin-top: 10px;
    margin-right: 15px;
    position: relative;
`

const User = styled.div`
    padding-bottom: 20px;
    span{
        color:red;
    }
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

export default function ProfilPage() {
  const {userId} = useParams();
  const [formattedUserData, setformattedUserData] = useState(null) 
  const [formattedUserActivity, setformattedUserActivity] = useState(null) 
  const [formattedUserAverage, setformattedUserAverage] = useState(null) 
  const [formattedUserPerformance, setformattedUserPerformance] = useState(null) 
  const [ApiIsOk, SetApiIsOk] = useState(true)
  
  useEffect(() => {
    if (dataMocked === false) {
  fetch(`http://localhost:3000/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((actualData) => {
    setformattedUserData(new userDataModel(actualData.data))
  })
  .catch(function(error) {
    console.log(error.message);
    if (error.message === 'Failed to fetch') {
      SetApiIsOk(false)
    }
  });
  
  fetch(`http://localhost:3000/user/${userId}/activity`)
  .then((response) => {
    return response.json();
  })
  .then((actualData) => {
    setformattedUserActivity(new activityDataModel(actualData.data))
  })
  .catch(function(error) {
    console.log(error.message);
    if (error.message === 'Failed to fetch') {
      SetApiIsOk(false)
    }
  });

  fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  .then((response) => {
    return response.json();
  })
  .then((actualData) => {
    setformattedUserAverage(new averageDataModel(actualData.data))
  })
  .catch(function(error) {
    console.log(error.message);
    if (error.message === 'Failed to fetch') {
      SetApiIsOk(false)
    }
  });

  fetch(`http://localhost:3000/user/${userId}/performance`)
  .then((response) => {
    return response.json();
  })
  .then((actualData) => {
    setformattedUserPerformance(new performanceDataModel(actualData.data))
  })
  .catch(function(error) {
    console.log(error.message);
    if (error.message === 'Failed to fetch') {
      SetApiIsOk(false)
    }
  });
} else { 

  var mock = 0;

  if (USER_MAIN_DATA[mock].id != userId){
    mock = mock + 1;
  }
  
  setformattedUserData(new userDataModel(USER_MAIN_DATA[mock])) 
  setformattedUserActivity(new activityDataModel(USER_ACTIVITY[mock]))
  setformattedUserAverage(new averageDataModel(USER_AVERAGE_SESSIONS[mock]))
  setformattedUserPerformance(new performanceDataModel(USER_PERFORMANCE[mock]))
  }
  }, [])

  return (
    <Main>
      {ApiIsOk ? 
        <>
        <User>
            <h1>Bonjour <span>{formattedUserData?.firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </User>
        <Dashboards>
            <Activity>
                <DailyActivity 
                userDaily={formattedUserActivity?.sessions}/>
                <DurationActivity 
                userDuration={formattedUserAverage?.sessions}/>
                <Chart 
                userPerformance={formattedUserPerformance?.sessions}/>
                <Score 
                userScore={formattedUserData?.todayScore}/>
            </Activity>
            <Stats 
            userStats={formattedUserData?.keyData}/>
        </Dashboards>
        </>
      : <h1> Erreur Api</h1>}
    </Main>
  );  
}
