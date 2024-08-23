import { useEffect, useState } from 'react'
import PercentAreaChart from './components/charts/percentAreaChart/PercentAreaChart'
import HomePieChart from './components/charts/pieChart/HomePieChart'
import HalfPieChart from './components/charts/pieChart/HalfPieChart'
import SimpleBarChart from './components/charts/barsChart/SimpleBarChart'
import { getCurrentDate, getLastSevenDays } from '../utils/getCurrentDate'
import MiniDisplay from './home/MiniDisplay'
import HomeNavbar from './home/HomeNavbar'
import Item from './home/Item'
import topProduct from './assets/imgs/TopProduct.jpg'

function Home() {
  const [xLabels, setXlabels] = useState([])
  const [currentMonth, setCurrentMonth] = useState('')
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [day, month, year] = await getCurrentDate('en')
        setCurrentMonth(month)
        setCurrentYear(year)

        const lastSevenDays = getLastSevenDays(day)
        setXlabels(lastSevenDays)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col h-[92%] overflow-auto overflow-y-scroll custom-scrollbar">
        <div className="h-[20%] items-center grid grid-cols-4 space-x-2">
          <MiniDisplay data={{ icon: 'sales', quantity: '671', desc: "Today's Sales" }} />
          <MiniDisplay data={{ icon: 'cash', quantity: '$ 1276.45', desc: "Today's Income" }} />
          <MiniDisplay data={{ icon: 'tips', quantity: '$ 165.00', desc: "Today's Tips" }} />
          <MiniDisplay data={{ icon: 'clients', quantity: '132', desc: "Today's Clients" }} />
        </div>

        {/* Weekly */}
        <section className="mt-4 grid grid-cols-3 h-[40%] gap-4">
          <div className="col-span-2 bg-gray-50 grid grid-cols-3 rounded-[2rem] shadow-lg">
            <div className="grid grid-rows-4 my-8 ml-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Dashboard</h3>
                <p>Overview of the last 7 days</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">$ 1423.96</h2>
                <p>Current Week Sales</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">$ 1197.47</h2>
                <p>Last Week Sales</p>
              </div>
              <button className="bg-black text-white rounded-[1rem] w-44 h-[70%]">
                <small>Last Month Summary</small>
              </button>
            </div>
            <div className="col-span-2 m-10 flex flex-col justify-center items-center">
              <h1 className="text-lg font-semibold">Weekly Overview</h1>
              <PercentAreaChart xLabels={xLabels} />
            </div>
          </div>
          <div className="bg-gray-50 shadow-xl rounded-[2rem]">
            <div className="w-full h-full p-4 grid grid-row-2">
              <div className="flex justify-center mt-4">
                <h1 className="text-xl font-semibold">Incomes details</h1>
                <span></span>
              </div>
              <div className="w-[100%] mb-8 flex flex-col justify-center items-center ">
                <p>
                  {currentMonth} {currentYear}
                </p>
                <HomePieChart />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-24 grid grid-cols-4 gap-2">
          <div className="bg-gray-100 h-60  flex flex-col justify-center items-center rounded-3xl shadow-md">
            <div className="h-52 overflow-hidden">
              <HalfPieChart />
            </div>
            <span className="flex ml-4 mb-4 text-lg font-semibold">Top 5 best products</span>
          </div>

          <div className="bg-gray-100 h-60 rounded-xl shadow-md">
            <div className="flex flex-row m-4 ">
              <span className="text-md font-semibold basis-2/3 ml-6">Average Income per Hour</span>
              <span className="flex basis-1/3 text-gray-700 ml-24"> View All </span>
            </div>
            <div className="flex flex-col mx-10 my-4">
              <Item data={{ quantity: 39.26, hour: '20:00' }} />
              <div className="border border-gray-200 w-full h-0 my-1"></div>
              <Item data={{ quantity: 45.32, hour: '19:00' }} />
              <div className="border border-gray-200 w-full h-0 my-1"></div>
              <Item data={{ quantity: 32.94, hour: '18:00' }} />
              <div className="border border-gray-200 w-full h-0 my-1"></div>
              <Item data={{ quantity: 34.01, hour: '17:00' }} />
              <div className="border border-gray-200 w-full h-0 my-1"></div>
            </div>
          </div>

          <div className="bg-gray-100 h-60 rounded-xl shadow-md col-span-2 flex flex-col">
            <div className="mt-4 flex justify-center">
              <span className="text-xl font-semibold">Most Saled Stock </span>
            </div>
            <SimpleBarChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

// {/* <div className='bg-white h-64 w-96 rounded-xl shadow-md'>
//     asdasdad
// </div> */}
