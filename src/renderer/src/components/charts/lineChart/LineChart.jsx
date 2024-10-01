import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'


const Example = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height="50%">
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="quantity" stroke="#88D66C" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Example
