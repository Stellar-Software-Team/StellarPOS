import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

// Pastel Greens:
// #A8E6CF
// #B2F2BB
// #C4F0C5
// #D4ECC3
// #E5F9E0
// Pastel Reds:
// #FFB3BA
// #FFCCCB
// #FFDFDF
// #FFDADA
// #FFEBEB

function HomePieChart() {
	const incomeValue = 1700;
	const outcomeValue = 500;

	const data = [
		{ value: incomeValue, label: 'Income', color: '#4E9F3D' },
		{ value: outcomeValue, label: 'Outcome', color: '#CC0000' },
	];
	const totalValue = incomeValue + outcomeValue;

	const data2 = [
		{ value: 1000, label: 'Cash', color: '#2E8B57' },
		{ value: 500, label: 'Card', color: '#22B00A' },
		{ value: 200, label: 'Tip', color: '#22D00A' },
		{ value: 500, label: 'Outcome', color: '#950101' },
	];

	const series = [
		{
			arcLabel: (item) => `${((item.value * 100) / totalValue).toFixed(2)}%`,
			arcLabelMinAngle: 45,
			data,
			innerRadius: 30,
			outerRadius: 100,
			paddingAngle: 2,
			cornerRadius: 5,
			startAngle: -200,
			endAngle: 180,
			cx: 150,
			cy: 150,
		},
		{
			arcLabelMinAngle: 45,
			data2,
			innerRadius: 100,
			outerRadius: 120,
			id: 'series-2',
			data: data2,
			paddingAngle: 2,
			cornerRadius: 5,
			startAngle: -200,
			endAngle: 180,
			cx: 150,
			cy: 150,
		},
	];

	return (
		<PieChart
			width={320}
			height={300}
			series={series}
			slotProps={{
				legend: { hidden: true },
			}}
		/>
	);
}

export default HomePieChart;
