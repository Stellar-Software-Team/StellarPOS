import React, { useState } from 'react'
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

function Reporting() {
  const [reportsSchedule, setreportsSchedule] = useState(false)

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Report Configuration</h1>
      </header>
      <section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">General Report Configuration</h1>
          <span className="text-gray-500">Update your report configuration</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2 ">
              <h1 className="font-bold text-lg">Allowed Export Formats</h1>
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Pdf
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Format ".pdf"
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />

              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Excel
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Format ".xlsx", ".xls", ".csv"
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />

              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Image
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Format ".png"
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>

            <div className="grid gap-2  ">
              <h1 className="font-bold text-lg">Reports</h1>

              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Direct printing
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will make the printing easier
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Send reports by email
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the admin to send reports by email
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>

            <div className="grid gap-2 ">
              <h1 className="font-bold text-lg">Schedule Reports</h1>
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Automate and schdule reports
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will send a report by day, week or month
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />

              <div className="w-12">
                <Select
                  label=""
                  //           value={value}
                  // onChange={(val) => setValue(val)}
                  variant="outlined"
                  className="text-black border-black"
                >
                  <Option className="text-black">Daily</Option>
                  <Option className="text-black">Weekly</Option>
                  <Option className="text-black">Monthly</Option>
                </Select>
              </div>
            </div>

            <div className="grid gap-2 ">
              <h1 className="font-bold text-lg">Number of sales threshold</h1>
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Sales Threshold Notifications
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will send a report by day, week or month
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
              <div className="w-24 pl-10">
                <div className="relative flex w-full max-w-[24rem]">
                  <Input
                    type="Threshold"
                    label="Add a Threshold"
                    // value={email}
                    // onChange={onChange}
                    className="pr-20"
                    containerProps={{
                      className: 'min-w-0'
                    }}
                  />
                  <Button
                    size="sm"
                    // color={email ? "gray" : "blue-gray"}
                    // disabled={!email}
                    className="ml-2 right-1 top-1 rounded"
                  >
                    Invite
                  </Button>
                </div>
              </div>
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

export default Reporting
