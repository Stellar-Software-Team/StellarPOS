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
import { TableStripedRows } from '../components/TableStripedRows'

const TABLE_HEAD = ['Payment Method', 'Quantity', 'Type', 'Date']

const TABLE_ROWS = [
  {
    col1: 'Card',
    col2: '4',
    col3: 'Disccount',
    col4: '23/04/18'
  },
  {
    col1: 'Cash',
    col2: '12',
    col3: 'Charge',
    col4: '27/04/18'
  }
]

function PaymentMethod() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Payment Method Settings</h1>
      </header>
      <section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Payment Methods</h1>
          <span className="text-gray-500">Update your Payment Method configuration</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg">Allowed Methods</h1>
                <Button variant="text">
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    new Method
                  </span>
                </Button>
              </div>
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Cash
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to pay with cash
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Card
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to pay with card
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
                      Transaction
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to make Transactions
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
                      Coupon
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to pay with Coupons
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>
            <div className="grid gap-2 "></div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Tips Settings</h1>
          <span className="text-gray-500">Customize your tips</span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">Tips</h1>

              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Allow Tips
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to pay tips
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>
            <div className="grid gap-2 ">
              <div className="flex gap-2">
                <h1 className="font-bold text-lg">Add Custome Tip Percentage</h1>
                <small className="flex self-end">10%,15%,20%</small>
              </div>
              <div className="flex gap-4 ">
                <Input
                  label=""
                  // value=""
                  // onChange=""
                  variant="static"
                  className="!border-black"
                />
                <Button variant="filled">
                  <span>add</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>{' '}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Foreign Currencies TO FIX</h1>
          <span className="text-gray-500">
            Configure your exchange configuration with foreign currencies
          </span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2">
              <h1 className="font-bold text-lg">General</h1>

              <Checkbox
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Allow foreign currencies
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the clients to pay with currencies from another country
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>
            <div className="grid gap-2 ">
              <div className="grid gap-2">
                <h1 className="font-bold text-lg">Currencies conversion</h1>

                <Checkbox
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-medium">
                        Manually set currency conversion
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        This option will set the currency conversion according to your
                        configurations instead of your business location
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: '-mt-5'
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <Button size="sm">Save</Button>{' '}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Discounts & Charges</h1>
          <span className="text-gray-500">Configure discounts for your payment methods </span>

          <div className="flex flex-wrap gap-20 mt-8">
            <div className="flex flex-col w-32 space-y-2">
              <h1 className="text-sm">Payment Methods</h1>
              <Select
                label=""
                //           value={value}
                // onChange={(val) => setValue(val)}
                variant="outlined"
                className="text-black border-black"
              >
                <Option className="text-black">Cash</Option>
                <Option className="text-black">Card</Option>
              </Select>
            </div>

            <div className="flex flex-col space-y-2 ">
              <h1 className="text-sm">Quantity Percentage</h1>
              <div className="">
                <Input className="text-black" size="md" variant="static" color="black" />
              </div>
            </div>

            <div className="flex w-max gap-4 items-end justify-start -ml-16 ">
              <Checkbox color="green" defaultChecked label="Disccount" />
              <Checkbox color="red" label="Charge" />
            </div>

            <div className="flex items-end space-y-2 -ml-16">
              <Button variant="filled">
                <span>add</span>
              </Button>
            </div>

            <section className=" w-[47rem] h-96">
              <TableStripedRows TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
            </section>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="font-bold text-xl">Invoice</h1>
          <span className="text-gray-500">Configure Invoice settings for your clients </span>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="grid gap-2 ">
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Display an option to create an invoice for your clients.
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will allow the cashier to provide invoices to the customers.
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>

            <div className="grid gap-2 ">
              <Checkbox
                defaultChecked
                label={
                  <div>
                    <Typography color="blue-gray" className="font-medium">
                      Allow the option to send invoices by email.
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      This option will enable sending the invoice by email.
                    </Typography>
                  </div>
                }
                containerProps={{
                  className: '-mt-5'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentMethod
