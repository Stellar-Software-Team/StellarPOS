import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'

export default function SimpleAreaChart({ xLabels }) {
  const uData = Array.from({ length: xLabels.length }, (_, i) => {
    return Math.random() * 700
  })
  const uData2 = Array.from({ length: xLabels.length }, (_, i) => {
    return Math.random() * 300
  })

  const xls = xLabels.length !== 0 ? xLabels : [1, 2, 3, 4, 5, 6, 7]
  return (
    <LineChart
      width={800}
      height={300}
      series={[
        { data: uData, label: 'Income', area: true, showMark: false, color: '#4E9F3D' },
        { data: uData2, label: 'Outcome', area: true, showMark: false, color: '#CC0000' }
      ]}
      xAxis={[{ scaleType: 'point', data: xls }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none'
        }
      }}
    />
  )
}
