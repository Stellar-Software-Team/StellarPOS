import React from 'react'
import DateRangePicker from '../home/DateRangePicker'


// green = A1DD70
// red = EE4E4E

function Sales() {
  const sales = [
    {
      id: 'DF41AC',
      date: '30/07/2024',
      time: '11:25 A.M',
      product: {
        name: 'Queso',
        sku: '1UL45',
        quantity: 3.5,
        saleType: 'kg',
        ammount: 1299.99,
        discount: 2
      },
      paymentMethod: 'cash',
      taxes: 16,
      client: 'Jose',
      employee: 'Jesus',
      state: 'Completed',
      desc: '',
      location: 'Local'
    },
    {
      id: 'DF41AC',
      date: '30/07/2024',
      time: '11:25 A.M',
      product: {
        name: 'Queso',
        sku: '1UL45',
        quantity: 3.5,
        saleType: 'kg',
        ammount: 1299.99,
        discount: 2
      },
      paymentMethod: 'cash',
      taxes: 16,
      client: 'Jose',
      employee: 'Jesus',
      state: 'Completed',
      desc: '',
      location: 'Local'
    },{
      id: 'DF41AC',
      date: '30/07/2024',
      time: '11:25 A.M',
      product: {
        name: 'Queso',
        sku: '1UL45',
        quantity: 3.5,
        saleType: 'kg',
        ammount: 1299.99,
        discount: 2
      },
      paymentMethod: 'cash',
      taxes: 16,
      client: 'Jose',
      employee: 'Jesus',
      state: 'Completed',
      desc: '',
      location: 'Local'
    },,{
      id: 'DF41AC',
      date: '30/07/2024',
      time: '11:25 A.M',
      product: {
        name: 'Queso',
        sku: '1UL45',
        quantity: 3.5,
        saleType: 'kg',
        ammount: 1299.99,
        discount: 2
      },
      paymentMethod: 'cash',
      taxes: 16,
      client: 'Jose',
      employee: 'Jesus',
      state: 'Completed',
      desc: '',
      location: 'Local'
    },,{
      id: 'DF41AC',
      date: '30/07/2024',
      time: '11:25 A.M',
      product: {
        name: 'Queso',
        sku: '1UL45',
        quantity: 3.5,
        saleType: 'kg',
        ammount: 1299.99,
        discount: 2
      },
      paymentMethod: 'cash',
      taxes: 16,
      client: 'Jose',
      employee: 'Jesus',
      state: 'Completed',
      desc: '',
      location: 'Local'
    }
  ]

  return (
    <>
      <section className="flex flex-col h-full font-mono">
        <div className="bg-gradient-to-r from-[#FAF6F0] via-white to-[#F4EAE0] shadow-md rounded-l-3xl rounded-r-2xl w-[100%] h-[25%] flex flex-row">
          <div className="flex flex-col justify-left mt-2 mx-2 ">
            <span className="text-[3rem] font-mono font-bold">Sales</span>
            <p className="font-mono text-gray-700">General Information of every sale</p>

            <nav className="flex flex-row mt-16 gap-4  h-[3rem]">
              <div className='basis-1/3'><DateRangePicker /></div>
              <div className="flex flex-row basis-1/3 border-black border items-center bg-white rounded-2xl">
                <div className="flex justify-center items-center ml-2 ">
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="ml-2 rounded-2xl w-[32rem] h-[2.5rem]  focus:outline-none"
                />
              </div>
              <div className="basis-1/3 flex mt-2 ml-6 items-center space-x-4">
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
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
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
              </div>
            </nav>
          </div>

          <div className="h-[90%] self-center w-[45%] space-x-20 flex flex-row">
            <div className="w-full h-full flex flex-row gap-2 space-x-4 items-center ">
              <div className=' h-full border-b-8 border-x-2 shadow-md bg-gradient-to-t from-[#A1DD70] rounded-b-3xl border-black basis-1/4'>
                    <div className='flex flex-col gap-4 mt-6 justify-center items-center'>
                        <span className='font-bold text-2xl'>Total Earned</span>
                          <div className='flex flex-row items-center gap-2 text-xl'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>

                            <span>5%</span>
                          </div>
                        <span className='font-bold text-xl'>$87,097</span>
                    </div>
              </div>
              <div className=' h-full border-b-8 border-x-2 shadow-md bg-gradient-to-t from-[#A1DD70] rounded-b-3xl border-black basis-1/4'>
                    <div className='flex flex-col gap-4 mt-6 justify-center items-center'>
                        <span className='font-bold text-2xl'>Total Sales</span>
                          <div className='flex flex-row items-center gap-2 text-xl'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>

                            <span>2.1%</span>
                          </div>
                        <span className='font-bold text-xl'>1,423</span>
                    </div>
              </div>
              <div className='basis-1/2 h-full flex flex-col'>
                  <div className='basis-1/4 w-[95%] gap-4 rounded-3xl flex items-center justify-left '>
                    <span className='font-bold text-xl'>Tickets Completed: </span>
                    <span className='text-lg'>5</span>
                  </div>
                  <div className='basis-1/4  w-[95%] gap-4 rounded-3xl flex items-center justify-left'>
                    <span className='font-bold text-xl'>Tickets Waiting: </span>
                    <span className='text-lg'>0</span>          
                  </div>
                  <div className='basis-1/4  w-[95%] gap-4 rounded-3xl flex items-center justify-left'>
                    <span className='font-bold text-xl'> More information: </span>
                    <span className='text-lg'>Something</span>          
                  </div>
                  <div className='basis-1/4  w-[95%] gap-4 rounded-3xl flex items-center justify-left'>
                    <span className='font-bold text-xl'> More information: </span>
                    <span className='text-lg'>Something</span>          
                  </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-4 bg-white shadow-md h-[80%] w-full rounded-3xl ">
          {/* <div className="flex flex-row justify-center space-x-2"></div> */}
          <div className="flex justify-left flex-wrap p-4 overflow-auto h-full w-full gap-2">
            {sales.map((sale, index) => {
              return (
                <>
                  <SalePanel sale={sale} />
                </>
              )
                
            })}
          </div>
        </section>
      </section>
    </>
  )
}

export default Sales

const SalePanel = ({ sale }) => {

  const subtotal = sale.product.quantity * sale.product.ammount
  const discountPrice = subtotal / 100 * sale.product.discount
  const taxes = subtotal * (sale.taxes / 100)
  const total = subtotal - discountPrice + taxes

  return (
    <>
    
      <div className="border-opacity-70 border-4 border-black p-4 shadow-lg bg-white font-mono rounded-3xl w-[51.5rem] h-[12rem] ">
        <section className="h-full">
          <div className="flex flex-row space-x-4 h-full">
            <div className="h-full flex flex-col space-y-1 items-left justify-left">
              <div className='flex flex-row gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>

              <span className='font-semibold text-xl'>Information</span>
              </div>
              <span className="font-mono  font-bold">
                ID: <span className="font-normal">#{sale.id}</span>
              </span>
              <span className="font-omon font-bold">
                Date: <span className="font-normal">{sale.date}</span>
              </span>
              <span className="font-omon font-bold">
                Time: <span className="font-normal">{sale.time}</span>
              </span>
              <span className="font-omon  font-bold">
                Location: <span className="font-normal">{sale.location}</span>
              </span>
            </div>
            <div className="flex h-full w-0 border border-black border-opacity-40"></div>

            <div className="flex flex-col">
              <div className="flex-row flex space-x-2">
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
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
                <span className="font-semibold text-xl">Product</span>
              </div>

                  <div className="flex-col flex ">
                    <div className="space-x-2">
                        <span className='font-bold'>Name:</span>
                        <span>{sale.product.name}</span>
                      </div>
                      <div className="space-x-2">
                        <span className='font-bold'>SKU:</span>
                        <span>{sale.product.sku}</span>
                      </div>
                      <div className="space-x-2">
                        <span className='font-bold'>Total:</span>
                        <span>{sale.product.quantity}</span>
                      </div>
                      <div className="space-x-2">
                        <span className='font-bold'>Ammount:</span>
                        <span>${sale.product.ammount}</span>
                      </div>
                      <div className="space-x-2">
                        <span className='font-bold'>Discount:</span>
                        <span>{sale.product.discount}%</span>
                      </div>
                </div>
            </div>

            <div className="flex h-full w-0 border border-black border-opacity-40"></div>

            <div className='flex flex-col space-y-1'>
              <div className="flex-row flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>

                  <span className="font-semibold text-xl">Payment</span>
                </div>

              <div className="space-x-2">
                  <span className='font-bold'>Subtotal:</span>
                  <span>{(subtotal).toFixed(2)}</span>
              </div>

              
              <div className="space-x-2">
                  <span className='font-bold'>Taxes:</span>
                  <span>{sale.taxes}%</span>
              </div>
              <div className="space-x-2">
                  <span className='font-bold'>Payment method:</span>
                  <span>{sale.paymentMethod}</span>
              </div>
              
              <div className="space-x-2">
                  <span className='font-bold'>Payment state:</span>
                  <span className='bg-green-300 px-2 py-1 rounded-2xl'>{sale.state}</span>
              </div>
            </div>
            <div className="flex h-full w-0 border border-black border-opacity-40"></div>
            <div className='flex flex-col space-y-1'>
              <div className="flex-row flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>


                  <span className="font-semibold text-xl">People</span>
                </div>

              <div className="space-x-2">
                  <span className='font-bold'>Client:</span>
                  <span>{sale.client ? sale.client: "Not-Reg"}</span>
              </div>
              <div className="space-x-2">
                  <span className='font-bold'>Employee:</span>
                  <span>{sale.employee}</span>
              </div>
              <div className="space-x-2 flex-col flex">
                  <span className='font-bold'>Description:</span>
                  <span>{sale.desc}</span>
              </div>
              
            
            </div>
            
          </div>
        </section>
      </div>
    </>
  )
}

// sale1 : {
//   id : 'DF41AC',
//   date:"30/07/2024",
//   time: "11:25 a.m",
//   product : {
//     name : "Queso",
//     sku : "1UL45",
//     quantity: "1 kg",
//     ammount: 130,
//     discount: 12
//   },
//   total: 12,
//   paymentMethod: "cash",
//   taxes: "IVA",
//   client: "Jose",
//   employee: "Jesus",
//   state: "Completed",
//   desc: "",
//   location: "Local"

// }
