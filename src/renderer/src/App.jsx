import Sitebar from './components/Sitebar'
import Body from './service/Body'
import Home from './home/Home'
import Dashboard from './home/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sales from './sales/Sales'
import Inventory from './inventory/Inventory'
import Employee from './employee/Employee'
import Settings from './settings/Settings'
import Apparence from './settings/Apparence'
import General from './settings/General'
import Reporting from './settings/Reporting'
import SettingsInventory from './settings/SettingsInventory'
import PaymentMethod from './settings/PaymentMethod'
import Service from './settings/Service'
import Taxes from './settings/Taxes'
import PreService from './service/PreService'

function App() {
  return (
    <>
      <div className="flex h-screen bg-[#1A1A1A]">
        <BrowserRouter>
          <Sitebar />

          <div className="flex-1 px-4 pt-4 bg-white rounded-l-[3rem]">
            <div className="h-[98%]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PreService" element={<PreService />} />
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Sales" element={<Sales />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/Settings" element={<Settings />}>
                  <Route index element={<General />} />
                  <Route path="Apparence" element={<Apparence />} />
                  <Route path="PaymentMethod" element={<PaymentMethod />} />
                  <Route path="SettingsInventory" element={<SettingsInventory />} />
                  <Route path="Reporting" element={<Reporting />} />
                  <Route path="Taxes" element={<Taxes />} />
                  <Route path="Service" element={<Service />} />
                </Route>

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
