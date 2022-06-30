import styled from "styled-components"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Graph = styled.div`
    width: 32%;
    height: 218px;
    background: #282D30;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

const change = (item) => {
    switch (item) {
        case 1:
        return "Cardio";
        case 2:
        return "Energie";
        case 3:
        return "Endurance";
        case 4:
        return "Force";
        case 5:
        return "Vitesse";
        case 6:
        return "Intensité";          
        default:
        break;
    }

}

function Chart({userPerformance}) {
    return(
        <Graph>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={65} data={userPerformance}>
                    <Radar dataKey="value" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[5, 15, 35, 50, 65]} />
                    <PolarAngleAxis dataKey="kind" tickFormatter={change} tick={{ fill: 'white', fontSize: '11', dy: 0 }} />
                </RadarChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default Chart