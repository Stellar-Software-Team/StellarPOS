import React from 'react'
import CartItem from './CartItem'
import { useNavigate, useLocation } from 'react-router-dom'

function OrderPanel() {
  const location = useLocation()
  const isHome = location.pathname === '/home'

  return (
    <>
      {isHome ? (
        <Home />
      ) : (
        <section className="bg-white rounded-[2rem] shadow-2xl h-full flex flex-col align-middle items-center justify-center">
          <div className="w-[90%] h-[95%] grid grid-rows-4 p-6">
            <div className="grid grid-cols-2 h-36">
              <h2 className="text-2xl font-semibold ">Order#1234</h2>
              <div className="flex justify-end">
                <h3 className="">Clear All</h3>
              </div>
            </div>

            <div className="overflow-y-scroll custom-scrollbar-2 custom-scrollbar -mt-32 space-y-6 h-[30rem]">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

            <div className="mt-[11.3rem] pt-2 w-[100%] justify-self-center h-[83%] bg-gray-100 rounded-2xl border-[1px] border-gray-300">
              <div className="m-2 grid grid-cols-2 text-lg">
                <span className="ml-12 font-semibold ">Subtotal</span>{' '}
                <span className="font-semibold justify-self-end mr-12">$11.8</span>
                <span className="ml-12 font-semibold ">Disccount sales</span>{' '}
                <span className="font-semibold justify-self-end mr-12">$0</span>
                <span className="ml-12 font-semibold ">Tax</span>{' '}
                <span className="font-semibold justify-self-end mr-12">$4.99</span>
                <span className="ml-12 mt-4 font-semibold text-xl">Total</span>{' '}
                <span className="font-semibold text-xl justify-self-end mr-12 mt-4">$16.79</span>
              </div>

              {/* <div className="-mt-14 mx-2 border-t border-dotted  border-[#322C2B]"></div> */}
            </div>

            <div className="mt-[10.5rem] grid grid-cols-2 gap-4">
              <button className="w-full h-12 rounded-2xl text-white bg-black text-xl">Print</button>
              <button className="w-full h-12 rounded-2xl text-white bg-black text-xl justify-self-end">
                Charge
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default OrderPanel
