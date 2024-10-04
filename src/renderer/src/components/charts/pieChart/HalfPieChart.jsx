import React, { PureComponent } from 'react'
import { PieChart, Pie, Tooltip, Sector, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Producto 1', value: 4 },
  { name: 'Producto 2', value: 20 },
  { name: 'Producto 3', value: 2 },
  { name: 'Producto 4', value: 1 },
  { name: 'Producto 5', value: 1 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default class Example extends PureComponent {
  //   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className="flex flex-col ">
        <PieChart className="mt-28k" width={300} height={330} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            //   cx={120}
            //   cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}
