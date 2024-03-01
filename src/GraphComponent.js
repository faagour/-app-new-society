import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text, Label } from 'recharts';

function GraphComponent({ data }) {
  return (
    <div style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'center' }}>Tendances des intensités d'émission de gaz à effet de serre des branches d'activité</h2>
      <LineChart width={600} height={300} data={data}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="Année" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'gCO2/euros', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default GraphComponent;


