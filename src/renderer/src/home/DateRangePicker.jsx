import Icon from '../components/Icon'

const DateRangePicker = () => (
  <div className="flex items-center space-x-2 p-2 border rounded-3xl border-gray-300">
    <Icon name="calendar" />
    <span className="text-sm text-gray-700">Oct 1 / 21 – Nov 1 / 21</span>
    <Icon name="dropdown" />
  </div>
)

export default DateRangePicker
