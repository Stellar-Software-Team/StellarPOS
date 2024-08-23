import productImg from '../assets/imgs/lettuce.png'
import LineChart from '../components/charts/lineChart/LineChart'

function Inventory() {
  const data = [
    {
      name: 'Item A',
      quantity: 200
    },
    {
      name: 'Item A',
      quantity: 450
    },
    {
      name: 'Item A',
      quantity: 150
    },
    {
      name: 'Item A',
      quantity: 950
    }
  ]
  const data2 = [
    {
      name: 'dia 0',
      quantity: 140
    },
    {
      name: 'dia 1',
      quantity: 510
    },
    {
      name: 'dia 2',
      quantity: 120
    },
    {
      name: 'dia 3',
      quantity: 390
    },
    {
      name: 'dia 4',
      quantity: 750
    }
  ]

  const items = [
    {
      name: 'Botellas Agua 600ml',
      cateogries: ['Bebida'],
      quantity: '140',
      saleType: 'Unidades',
      price: '$14',
      specialType: ['Variant']
    },
    {
      name: 'Paletas de Hielo',
      cateogries: ['Paletas'],
      quantity: '500',
      saleType: 'Unidades',
      price: '$17',
      specialType: ['Variant']
    },
    {
      name: 'Lechuga',
      cateogries: ['Vegetal'],
      quantity: '200',
      saleType: 'Unidades',
      price: '$20',
      specialType: ['Putrefiable']
    }
  ]

  return (
    <>
      <section className="flex flex-row h-full gap-2">
        <div className="h-[100%] w-1/3 bg-white shadow-md rounded-3xl ">
          <section>
            <div className="m-4 h-full flex flex-col">
              <div className="flex flex-row gap-[17rem]">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">Lettuce</span>
                  <p>Product ID: 7FAC4</p>
                </div>
                <div className="flex flex-row gap-2">
                  <button className="flex flex-row items-center gap-1 bg-black text-white rounded-2xl px-4">
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </button>
                  <button className="bg-black text-white rounded-2xl px-4">
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col">
                <div className="flex flex-row gap-4">
                  <span className="text-lg font-semibold">Inventory:</span>
                  <span className="text-lg font-semibold">On shell:</span>
                </div>
                <div className="flex flex-row gap-4">
                  <span className="text-md text-gray-600 font-bold">994 items</span>
                  <span className="text-gray-500 font-bold">22/35 items</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col">
                <div className="grid grid-cols-3 justify-center mr-8">
                  <span className="">🟢 992 Good</span>
                  <span>🟠 1 About to expire</span>
                  <span className="ml-14">🔴 1 Crushed</span>
                </div>
                <div className="flex justify-center items-center mt-10 border border-gray-300 rounded-2xl">
                  <img src={productImg} alt="ProductItem" className="max-w-96 max-h-96" />
                </div>

                <div className="grid grid-cols-2 mt-4">
                  <div className="flex flex-col w-full h-32">
                    <span className="text-xl">Salesprice:</span>
                    <div className="flex flex-row gap-2">
                      <h1 className="font-semibold text-xl">$8.92</h1>
                      <div className="bg-[#abf247] rounded-2xl flex justify-center items-center px-4">
                        <span className="font-bold">1.4%</span>
                      </div>
                    </div>
                    <br />
                    <LineChart data={data} />
                  </div>

                  <div className="flex flex-col w-full h-32">
                    <span className="text-xl">Sales:</span>
                    <div className="flex flex-row gap-2">
                      <h1 className="font-semibold text-xl">423</h1>
                      <div className="bg-[#abf247] rounded-2xl flex justify-center items-center px-4">
                        <span className="font-bold">12%</span>
                      </div>
                    </div>
                    <span className="text-gray-500 font-semibold">$24,567.87</span>
                    <LineChart data={data2} />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <span className="text-2xl font-bold">General Information of the product</span>
              </div>
              <div className="mt-6 flex flex-row">
                <div className="flex flex-col gap-4">
                  <span className="text-lg font-semibold ">Last sale: </span>
                  <span className="text-lg font-semibold ">Last modification: </span>
                  <span className="text-lg font-semibold ">Categories: </span>
                </div>
                <div className="flex flex-col gap-4 ml-4">
                  <span className="text-lg text-gray-600 ">26/07/2024 </span>
                  <span className="text-lg text-gray-600">24/07/2024 </span>
                  <span className="text-lg text-gray-600">Food, Vegetable </span>
                </div>
              </div>
              <div className="mt-6 flex w-full">
                <button className="bg-black p-4 w-full rounded-3xl">
                  <span className="text-lg text-white">View detail statistics</span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="h-full w-2/3 bg-white shadow-md rounded-2xl">
          <section className="m-4 h-[97%] full w-[97.5%]">
            <div className=" h-full w-full flex flex-col">
              <div className="flex flex-row jusitfy-between">
                <div className="bg-black rounded-2xl mx-2 flex-1 h-24 flex flex-col justify-center items-center">
                  <span className="text-white italic text-xl">Total value</span>
                  <span className="text-white text-3xl mt-2">$ 5,000</span>
                </div>
                <div className="bg-black rounded-2xl mx-2 flex-1 h-24 flex flex-col justify-center items-center">
                  <span className="text-white italic text-xl">Total of pieces</span>
                  <span className="text-white text-3xl mt-2">467</span>
                </div>
                <div className="bg-black rounded-2xl mx-2 flex-1 h-24 flex flex-col justify-center items-center">
                  <span className="text-white italic text-xl">Listed products</span>
                  <span className="text-white text-3xl mt-2">467</span>
                </div>
              </div>

              <div className="flex flex-row mt-4">
                <div className="flex gap-2">
                  <button className="bg-black p-4 rounded-3xl">
                    <span className="text-white text-md flex flex-row gap-2">
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
                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                        />
                      </svg>
                      History
                    </span>
                  </button>
                  <button className="p-4 rounded-3xl bg-black text-white">
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
                  </button>
                </div>

                <div className="flex flex-row ml-[65%] gap-2">
                  <div className="p-4 bg-black rounded-3xl text-white">
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
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>

                  <div className="p-4 bg-black rounded-3xl text-white">
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
                  </div>
                  <div className="p-4 bg-black rounded-3xl">
                    <span className="text-white">Add Item</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-x-auto mt-6 rounded-2xl">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 custom-scrollbar">
                  <thead className="text-xs text-white  uppercase bg-black ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cateogry
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cantidad de producto
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tipo de venta
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Special Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.name}
                        </th>
                        <td className="px-6 py-4">
                          {item.cateogries.map((category, index) => {
                            if (item.cateogries.length - 1 !== index) {
                              return category + ', '
                            }
                            return category + ''
                          })}
                        </td>
                        <td className="px-6 py-4">{item.quantity}</td>
                        <td className="px-6 py-4">{item.saleType}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4">
                          {item.specialType.map((type, index) => {
                            if (item.specialType.length - 1 !== index) {
                              return type + ', '
                            }
                            return type + ''
                          })}
                        </td>
                        <td className="px-6 py-4 flex flex-row gap-3">
                          <div>
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </div>

                          <div>
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
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Inventory
