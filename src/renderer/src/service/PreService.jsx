import React, { useState } from 'react'
import { Button, Input, Select, Option, Checkbox, Typography } from '@material-tailwind/react'
import CustomModal from './CustomModal'
import { Link,useNavigate } from 'react-router-dom'

function PreService() {
  const [open, setOpen] = useState(false)
  
  const navigate = useNavigate();
  const cashRegisters = [
    {
      id: 1,
      name: 'Main Register',
      status: 'Opened',
      createdAt: new Date(),
      createdBy: 'John Doe',
      balance: 1000,
      currency: 'MXN',
      type: 'Product'
    },
    {
      id: 2,
      name: 'Secondary Register',
      status: 'Opened',
      createdAt: new Date(),
      createdBy: 'John Doe',
      balance: 1000,
      currency: 'MXN',
      type: 'Service'
    },
    {
      id: 3,
      name: 'Fast Register',
      status: 'Opened',
      createdAt: new Date(),
      createdBy: 'John Doe',
      balance: 1000,
      currency: 'MXN',
      type: 'Service'
    }
  ]

  const paymentMethods = ['Cash', 'Card', 'Transfer']
  return (
    <>
      <section className="flex flex-col  h-full">
        <div className="flex basis-[15%] ">
          <div className="flex flex-col basis-[25%] justify-center items-center ">
            <div className="w-96 flex flex-col ">
              <Button
                fullWidth
                className="flex justify-center items-center gap-2"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Create New Cash Register
              </Button>

              <CustomModal open={open} onClose={() => setOpen(false)}>
               
                <div className="bg-[#F5F5F7] rounded-3xl flex flex-col p-6 w-[50rem] max-w-[100%] h-[40rem] max-h-[90%]  ">
                  <h1 className='text-3xl font-bold'>Create New Cash Register</h1>
                  <small className='text-gray-500 mb-6'>
                    Create a new cash register to manage your sales and inventory.
                  </small>
                  <section className='grid grid-cols-2 gap-4 '>
                    <div className='flex flex-col gap-2 w-[100%]'>
                      <h1 className='text-2xl font-bold'>Cashier</h1>
                      <Select className='!text-xl'>
                        <Option>Josue</Option>
                        <Option>Maria</Option>
                      </Select>
                    </div>
                    <div className='flex flex-col gap-2 w-[100%]'>
                      <h1 className='text-2xl font-bold'>Register Type</h1>
                      <Select className='!text-xl'>
                        <Option>Product</Option>
                        <Option>Service</Option>
                      </Select>
                    </div>
                    <div className='flex flex-col gap-2 w-[100%]'>
                      <h1 className='text-2xl font-bold'>Name</h1>
                      <Input
                        variant="standard"
                        label="Set a name for the register"
                        className="!text-xl "
                      />
                    </div>
                    <div className='flex flex-col gap-2 w-[100%]'>
                      <h1 className='text-2xl font-bold'>Initial Balance</h1>
                      <Input
                        variant="standard"
                        label="Set an initial balance"
                        className="!text-xl "
                      />
                    </div>
                    <div className='flex flex-col gap-2 w-[100%]'>
                      <h1 className='text-2xl font-bold'>Payment Methods</h1>
                      <section className='flex flex-col gap-2 h-58 rounded-3xl p-4 overflow-y-auto custom-scrollbar'>
                        {paymentMethods.map((paymentMethod) => (
                          paymentMethod === 'Card' || paymentMethod === 'Cash' ? (
                            <Checkbox defaultChecked key={paymentMethod} label={paymentMethod} />
                          ) : (
                            <Checkbox key={paymentMethod} label={paymentMethod} />
                          )
                        ))}
                      </section>
                    </div>
                    
                  </section>
                        
                 <div className='flex justify-end mt-4 h-full items-end'>
                 <Button className="bg-black text-white rounded-xl  h-14 flex items-center gap-6 justify-center w-full"
                 onClick={()=>{
                  navigate('/Service')
                 }}
                      >
                        Create Register
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Button>
                 </div>
                </div>
              </CustomModal>
              <div className="flex gap-2 mt-2 ">
                <Button fullWidth variant="outlined">
                  Opened
                </Button>
                <Button fullWidth>Closed </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap basis-[85%] gap-4 p-4 rounded-3xl">
          {cashRegisters.map((cashRegister) => (
            <PreServiceCashRegister key={cashRegister.id} cashRegister={cashRegister} />
          ))}
        </div>
      </section>
    </>
  )
}

export default PreService;

function PreServiceCashRegister({ cashRegister }) {
  return (
    <div className=" border border-gray-200 shadow-lg bg-white w-[35rem] h-48 rounded-3xl flex flex-col justify-top  px-12">
      <div className="mt-8 space-y-2">
        <h1 className="text-2xl font-bold">{cashRegister.name}</h1>
        <div className=" bg-green-600 w-24 rounded-3xl py-1 px-4">
          <h1 className="text-white font-bold">{cashRegister.status}</h1>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">
            <span className="font-bold">Created at:</span>{' '}
            {cashRegister.createdAt.toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Type:</span> {cashRegister.type}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-900 ">
            <span className="font-bold">Created by:</span> {cashRegister.createdBy}
          </p>
          <p className="text-gray-900">
            <span className="font-bold">Balance:</span> {cashRegister.balance}{' '}
            <span className="text-gray-900">{cashRegister.currency}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
