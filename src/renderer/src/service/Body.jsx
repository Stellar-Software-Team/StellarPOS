import Product from './Product'
import OrderPanel from './OrderPanel'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function Body() {
  const productNumber = 1

  const location = useLocation()
  const isHome = location.pathname === '/home'
  const bodyNav = location.state || []
  const gridClassName = `grid grid-cols-${bodyNav.length} gap-3`

  return (
    <>
      {isHome ? (
        <Home />
      ) : (
        <>
          <Navbar />
          <div className="mx-2 rounded-lg ">
            <nav className="w-[60%] overflow-x-scroll custom-scrollbar">
              <div className={`grid {gridClassName} gap-3`}>
                <div className="flex gap-12">
                  {bodyNav.map((item, index) => (
                    <div
                      key={index}
                      className="hover:bg-[#322C2B] hover:text-[#E4C59E] px-3 py-1 rounded-xl"
                    >
                      <span className="text-xl">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
            <div className="flex flex-cols gap-12">
              <div className="grid grid-cols-3 gap-4 mt-6 h-[48rem] overflow-y-scroll custom-scrollbar">
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
              </div>

              <div className="h-[51rem] w-[36%]">
                <OrderPanel />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Body
