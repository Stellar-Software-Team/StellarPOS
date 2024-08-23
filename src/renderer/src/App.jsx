import Sitebar from './components/Sitebar'
import Body from './service/Body'
import Home from './Home'
import Dashboard from './home/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sales from './sales/Sales'
import Inventory from './inventory/Inventory'
import Employee from './employee/Employee'
import Settings from './settings/Settings'

function App() {
  const bodyData = {
    Service: ['All', 'Cold Drinks', 'Hot Drinks', 'Sandwich', 'Desserts']
  }
  console.log(bodyData)
  const currentNav = []
  return (
    <>
      <div className="flex h-screen bg-[#1A1A1A]">
        <BrowserRouter>
          <Sitebar bodyData={bodyData.Service} />

          <div className="flex-1 px-4 pt-4 bg-white rounded-l-[3rem]">
            <div className="h-[98%]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bodyProducts" element={<Body bodyNav={currentNav} />} />
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Sales" element={<Sales />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/Settings" element={<Settings />} />

                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
