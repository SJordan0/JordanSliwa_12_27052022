import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components'
import calories from '../../assets/calories.svg'
import proteines from '../../assets/proteines.svg'
import glucides from '../../assets/glucides.svg' 
import lipides from '../../assets/lipides.svg'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';
import '../../Service/dataMocked'
import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../Service/dataMocked';

const Main = styled.main`
    margin-left: 100px;
    position: relative;
    top: -100px;
    height: 580px;
`

const Dashboards = styled.div`
    display: flex;
    justify-content: space-around;
`

const Activity = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Daily = styled.div`
    width: 100%;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    margin-bottom: 30px;
`

const Duration = styled.div`
    width: 32%;
    height: 263px;
    background: #FF0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

const Graph = styled.div`
    width: 32%;
    height: 263px;
    background: #282D30;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

const Score = styled.div`
    width: 32%;
    height: 263px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23%;
`

const Stat = styled.div`
    background-color: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    height: 21%;
    display: flex;
    align-items: center;

    p{
        font-size: 14px;
        color: #74798C;
        margin-left: 20px;
    }

    img{
        margin-left: 20px;
    }
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
                <Daily>
                    <p>Activité quotidienne</p>
                    <ResponsiveContainer width={700} height={300}>
                            <BarChart
                            width={500}
                            height={300}
                            data={USER_ACTIVITY[0].sessions}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis 
                                dataKey="calories"
                                orientation="right"
                                tickCount={3}
                                axisLine={false}
                                tickLine={false}
                                tickMargin={5}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="kilogram" fill="black" barSize={7} radius={[3, 3, 0, 0]} />
                            <Bar dataKey="calories" fill="red" barSize={7} radius={[3, 3, 0, 0]}/>
                            </BarChart>
                        </ResponsiveContainer>
                </Daily>
                <Duration>
                    <p>Durée</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={USER_AVERAGE_SESSIONS[0].sessions}>
                        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </Duration>
                <Graph>
                    <p>Graphique</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart outerRadius={90} data={USER_PERFORMANCE[0].data}>
                            <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
                            <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 65, 90]} />
                            <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: '12', dy: 0 }}/>
                            <PolarRadiusAxis />
                        </RadarChart>
                    </ResponsiveContainer>
                </Graph>
                <Score>
                    <p>Score</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            width={256}
                            height={256}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={100}
                            barSize={10}
                            data={USER_MAIN_DATA}
                            startAngle={180}
                            endAngle={90}
                            fill="red"
                        >
                            <RadialBar dataKey="todayScore" cornerRadius={10} />
                            <circle cx="50%" cy="50%" fill="white" r="0"></circle>
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <p>
                        <span>{USER_MAIN_DATA[0].todayScore*100}%</span> <br />
                        de votre <br />
                        objectif
                    </p>
                </Score>
            </Activity>
            <Stats>
                <Stat>
                    <img src={calories} alt=''/>
                    <div>
                        <h2>{USER_MAIN_DATA[0].keyData.calorieCount}Kcal</h2>
                        <p>Calories</p>         
                    </div>
                </Stat>
                <Stat>
                    <img src={proteines} alt=''/>
                    <div>
                        <h2>{USER_MAIN_DATA[0].keyData.proteinCount}g</h2>
                        <p>Proteines</p>
                    </div>
                </Stat>
                <Stat>
                    <img src={glucides} alt=''/>
                    <div>
                        <h2>{USER_MAIN_DATA[0].keyData.carbohydrateCount}g</h2>
                        <p>Glucides</p>
                    </div>
                </Stat>
                <Stat>
                    <img src={lipides} alt=''/>
                    <div>
                        <h2>{USER_MAIN_DATA[0].keyData.lipidCount}g</h2>
                        <p>Lipides</p>
                    </div>
                </Stat>
            </Stats>
        </Dashboards>
    </Main>
  );
}

export default ProfilPage;
