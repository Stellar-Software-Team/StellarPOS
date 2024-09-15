import React from 'react'
import {
    Switch,
    Select,
    Option,
    Input,
    Textarea,
    Checkbox,
    Typography,
    Button
  } from '@material-tailwind/react'

function Service() {
  return (
    <div><>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Service Settings</h1>
      </header>
      <section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Cash Register</h1>
          <span className="text-gray-500">Set a Cash Register Configuration</span>  

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
                <h1 className="font-bold text-lg">General Set up</h1>
                <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Automaticly open General cash register at certain time 
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      it's needed to set a time for automaticly open the cash register. Default is 8:00 AM to 8:00 PM
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
             <div className='flex space-x-16 items-center'>
              <div>
              <h1 className='font-semibold text-md'>Open General cash register at:</h1>
                <input
                    type="time"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
              <h1 className='font-semibold text-md'>Close General cash register at:</h1>
                <input
                    type="time"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
             </div>

             
            </div>

            

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg">Doble system</h1>
              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Active doble work schedule
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This will set the work schedule in the morning and evening
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />

                      


            </div>
            <div className="grid gap-2">
             
            </div>

            <div className="grid gap-2">
            <div className='flex justify-left mt-2'><h1 className='font-bold text-lg'>Morning work schedule</h1></div>
                    <div className='flex space-x-16 items-center'>
                      <div className=''>
                      <h1 className='font-semibold text-md'>Open General cash register at:</h1>
                        <input
                            type="time"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                      <h1 className='font-semibold text-md'>Close General cash register at:</h1>
                        <input
                            type="time"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className='flex justify-left mt-2'><h1 className='font-bold text-lg'>Evening work schedule</h1></div>
                    <div className='flex space-x-16 items-center'>
                      <div className=''>
                      <h1 className='font-semibold text-md'>Open General cash register at:</h1>
                        <input
                            type="time"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                      <h1 className='font-semibold text-md'>Close General cash register at:</h1>
                        <input
                            type="time"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
            </div>
            
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>{' '}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Service Register</h1>
          <span className="text-gray-500">Update the view of the application</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex  items-end gap-2">
              <div className="grid gap-2">
                <h1 className="font-bold text-lg">Theme Mode</h1>
                <Select
                  label=""
                  //           value={value}
                  // onChange={(val) => setValue(val)}
                  variant="outlined"
                  className="text-black  !border-black"
                >
                  <Option className="text-black">White Theme</Option>
                  <Option className="text-black">Dark Theme</Option>
                </Select>
              </div>
              <div className="grid gap-2 ">
                <h1 className="font-bold text-lg">Palette</h1>
                <Select
                  label=""
                  //           value={value}
                  // onChange={(val) => setValue(val)}
                  variant="outlined"
                  className="text-black border-black"
                >
                  <Option className="text-black">Coffee</Option>
                  <Option className="text-black">Moderm UI</Option>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Animations</h1>
              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Activate
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Animations will be displayed by default
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />{' '}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Notifications</h1>
              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Activate
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Notifications will be displayed by default
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>{' '}
          </div>
        </div>
      </section>
    </></div>
  )
}

export default Service