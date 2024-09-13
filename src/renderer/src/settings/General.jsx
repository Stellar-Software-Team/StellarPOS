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
  Card
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

            <div className="grid gap-2">
            <div className='flex flex-col gap-2 items-center '>
              {/* <h1 className="font-bold text-lg">Reset Password</h1> */}
              <Checkbox
                defaultChecked
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

            <div className="grid gap-2">
            <h1 className="font-bold text-lg">Security 4-Digits Pin for Admin Actions</h1>
            <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Add 2-Factor Authentication
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Additional security for your account using your phone number
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />    
            
            </div>

            <div className="grid gap-2 ">
            
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
