import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../Service/dataMocked';
import DailyActivity from '../../components/DailyActivity';
import DurationActivity from '../../components/DurationActivity';
import Chart from '../../components/Chart';
import Score from '../../components/Score';
import Stats from '../../components/Stats';

import React, { Component} from "react"

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

class Profil extends Component{
  
  state = {
      user: {},
      userInfos: {},
      userKey: {},
      activity: {},
      average: {},
      performance: {},
      test: {}
  }

  componentDidMount() {
    const {userId} = this.props.params;
    
    fetch(`http://localhost:3000/user/${userId}`)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
        this.setState({user: result.data, userInfos: result.data.userInfos, userKey: result.data.keyData})
      })   
      
      fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
        this.setState({activity: result.data.sessions})
      }) 

      fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
        this.setState({average: result.data.sessions})
      }) 

      fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
        this.setState({performance: result.data.data})
      }) 
  }

  render() {
    return (
          <Main>
              <User>
                  <h1>Bonjour <span>{this.state.userInfos.firstName}</span></h1>
                  <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
              </User>
              <Dashboards>
                  <Activity>
                      <DailyActivity 
                      userDaily={this.state.activity}/>
                      <DurationActivity 
                      userDuration={this.state.average}/>
                      <Chart 
                      userPerformance={this.state.performance}/>
                      <Score 
                      userScore={this.state.user.score}/>
                  </Activity>
                  <Stats 
                  userStats={this.state.userKey}/>
              </Dashboards>
          </Main>
        );
  }
}

// export default ProfilPage;
export default function ProfilPage (props) {
  return (
    <Profil
      {...props}
      params={useParams()} />
  );
};
