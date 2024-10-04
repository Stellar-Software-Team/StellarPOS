import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 400,
//     pv: 200,
//     amt: 2400
//   },
//   {
//     name: 'Page B',
//     uv: 300,
//     pv: 198,
//     amt: 2210
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 300,
//     amt: 2290
//   },
//   {
//     name: 'Page D',
//     uv: 2000,
//     pv: 400,
//     amt: 2290
//   },
//   {
//     name: 'Page E',
//     uv: 2000,
//     pv: 470,
//     amt: 2290
//   }
// ]

const Example = ({ data }) => {
	return (
		<ResponsiveContainer width="90%" height="50%">
			<LineChart width={300} height={100} data={data}>
				<Line
					type="monotone"
					dataKey="quantity"
					stroke="#88D66C"
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Example;
