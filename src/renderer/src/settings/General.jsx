import React from 'react'
import {
  Switch,
  Select,
  Option,
  Input,
  Textarea,
  Checkbox,
  Typography,
  Button,
  Card,
  IconButton
} from '@material-tailwind/react'
function General() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">General Settings</h1>
      </header>
      <section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Business Information</h1>
          <span className="text-gray-500">Update your business details</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Name</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />
              {/* <input id="business-name" defaultValue="Acme Inc" className='border border-gray-400 rounded-md h-8' /> */}
            </div>
            <div className="grid gap-2 ">
              <h1 className="font-bold text-lg">Business Email</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Phone</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />{' '}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Address</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />{' '}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Logo</h1>
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="block w-full border border-black shadow-sm rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
              {/* <FileInput/> */}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Currency</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option className="text-black">MXN</Option>
                <Option className="text-black">USD</Option>
              </Select>
              {/* <select name="R-size" id="R-size" className='border border-gray-400 rounded-md h-8'>
                      <option value="volvo">MXN</option>
                      <option value="saab">USD</option>
                    </select> */}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Language</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option className="text-black">Español (México)</Option>
                <Option className="text-black">English</Option>
              </Select>
              {/* <select name="R-size" id="R-size" className='border border-gray-400 rounded-md h-8'>
                      <option value="volvo">Español (México)</option>
                      <option value="saab">English</option>
                    </select> */}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Business Location</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option className="text-black">México</Option>
                <Option className="text-black">United States</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Receipt Settings</h1>
          <span className="text-gray-500">Customize your receipt preferences</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Logo</h1>
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="block w-full border border-black shadow-sm rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
            </div>
            <div className="grid gap-2 ">
              <h1 className="font-bold text-lg">Receipt Fooder</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />{' '}
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Receipt Font</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option className="text-black">Mono</Option>
                <Option className="text-black">Sans Serif</Option>
              </Select>
            </div>
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Receipt Size</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option index={1} className="text-black">
                  Large
                </Option>
                <Option className="text-black">Medium</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>{' '}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Login & Security</h1>
          <span className="text-gray-500">Update Login Settings & Security</span>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="grid gap-2">
             <div className='flex flex-col gap-2'>
              <h1 className="font-bold text-lg">Account Email</h1>  
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />
             </div>
            </div>

            <div className="grid gap-2 ">
            <div className='flex flex-col gap-2  '>
              <h1 className="font-bold text-lg">Enable 2-Factor Authentication</h1>
              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Add 2-Factor Authentication
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Additional security for your account using your phone
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
             </div>
            </div>

            <div className="grid gap-2 ">
            <h1 className="font-bold text-lg">Security 4-Digits Pin for Admin Actions</h1>
           <div> <Checkbox
            className=''
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Ask for 4-Digits Pin for Admin Actions
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will ask for a 4-Digits Pin for Admin Actions like reset password, create new employee, etc.
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5 black'
                }}
              />  </div>  
            
            </div>

            <div className="grid gap-2 items-center">
            <h1 className="font-bold text-lg">Event history</h1>
               <section className='flex flex-col gap-2 '>
               <div className="flex items-center gap-2">
                <IconButton>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </IconButton>
                  <span className='text-black text-xl'>Historical events</span>
                </div>

                <div className="flex items-center gap-2">
                <IconButton>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                </IconButton>
                  <span className='text-black text-xl font'>Historical changes</span>
                </div>
               </section>
            </div>


            <div className="grid gap-2 ">
            <h1 className="font-bold text-lg">Close session remotely</h1>
           <div> <Checkbox
            className=''
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Remotetly close session
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allows you to close any session remotely from your computer.
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5 black'
                }}
              />  
               <div className='flex flex-col gap-2 mt-4'>
                  <div className='flex gap-2'>
                    <h1>Session 1 Firefox Windos 10</h1> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='flex gap-2'>
                    <h1>Session 2 Edge Windows 11</h1> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
               
                  </div>
               </div>
              </div>  
            
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Recovery</h1>
          <span className="text-gray-500">Recover or reset your passwords</span>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="grid gap-2">
            <h1 className="font-bold text-lg">New Password</h1>

            <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />
            </div>

            <div className="grid gap-2">
               <h1 className="font-bold text-lg">Confirm New Password</h1>
              <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl text-blue-500"
                
              />
            </div>

            <div className="grid gap-2">
            <h1 className="font-bold text-lg">Reason for change</h1>
            <Textarea label="Message"  />
                  
            
            </div>

            <div className="grid gap-2">
            
            <h1 className="font-bold text-lg mt-2">4-Digits Pin</h1>
            <Input
                label=""
                // value=""
                // onChange=""
                variant="static"
                className="!border-black !text-xl"
              />
                  
            
            </div>

            <div className="grid gap-2 ">
            
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default General
