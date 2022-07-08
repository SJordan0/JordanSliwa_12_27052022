import styled from "styled-components"
<<<<<<< Updated upstream
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from "../../Service/dataMocked";
=======
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { renameChart } from "../../models";
import PropTypes from 'prop-types'; 
import React from "react";
>>>>>>> Stashed changes

const Graph = styled.div`
    width: 32%;
    height: 263px;
    background: #282D30;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

<<<<<<< Updated upstream
function Chart() {
=======
/**
 * Performance component, display performance of the user
 * @prop {array} userPerformance performance data
 * @returns {React.ReactComponentElement}
 */

function Chart({userPerformance}) {
>>>>>>> Stashed changes
    return(
        <Graph>
            <p>Graphique</p>
            <ResponsiveContainer width="100%" height="100%">
<<<<<<< Updated upstream
                <RadarChart outerRadius={90} data={USER_PERFORMANCE[0].data}>
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 65, 90]} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: '12', dy: 0 }}/>
                    <PolarRadiusAxis />
=======
                <RadarChart outerRadius={65} data={userPerformance}>
                    <Radar dataKey="value" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[5, 15, 35, 50, 65]} />
                    <PolarAngleAxis dataKey="kind" tickFormatter={renameChart()} tick={{ fill: 'white', fontSize: '11', dy: 0 }} />
>>>>>>> Stashed changes
                </RadarChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default Chart

Chart.propTypes = {
    userPerformance: PropTypes.array,
}