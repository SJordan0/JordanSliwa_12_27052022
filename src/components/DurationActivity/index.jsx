import styled from "styled-components"
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const days = (item) => {
    switch (item) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";            
      default:
        break;
    }
}

const Duration = styled.div`
    width: 32%;
    height: 217px;
    background: #FF0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    position: relative;
    p {
        color: white;
        opacity: 0.5;
        font-size: 15px;
        position: absolute;
        left: 10%;
        top: 10%;
        width: 70%;
      }
`

function DurationActivity({userDuration}){
    return(
        <Duration>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%" className="duration">
                <LineChart 
                data={userDuration} 
                margin={{ top: 0, right: 0, left: 5, bottom: 0 }}
                onMouseMove={(e) => {
                    if (e.isTooltipActive === true) {
                      let div = document.querySelector('.duration');
                      let windowWidth = div.clientWidth;
                      let mouseXpercentage = Math.round(
                        (e.activeCoordinate.x / windowWidth) * 100
                      );
                      div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                    }
                  }}
                  >
                <Tooltip />
                <XAxis
                    dataKey="day"
                    stroke="#ffffff"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={days}
                />
                <YAxis
                    dataKey="sessionLength"
                    hide={true}
                    type="number"
                    domain={['dataMin -15', 'dataMax + 45']}
                />
                <Line type="natural" dataKey="sessionLength" name="Durée (min)" stroke="#8884d8" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </Duration>
    )
}

export default DurationActivity