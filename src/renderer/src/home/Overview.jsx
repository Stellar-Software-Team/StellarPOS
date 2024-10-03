import React from 'react'
import {
    Typography,
    Card, 
    CardHeader, 
    CardBody, 
    Avatar
  } from "@material-tailwind/react";  
import Chart from "react-apexcharts";
import LineChart from '../components/charts/lineChart/LineChart'

function Overview() {
    const chartConfig = {
        type: "bar",
        width: 800,
        height: 300,
        series: [
          {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: true,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#020617"],
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 2,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
            categories: [
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: false,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
        },
      };
    
      const pieChartConfig = {
        type: "pie",
        width: 280,
        height: 280,
        series: [44, 55],
        options: {
          chart: {
            toolbar: {
              show: true,
            },
    
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#DF2E38", "#B8001F","#821131","#A02334","#FF6969"],
          legend: {
            show: false,
          },
        },
      };
       
      const pieChartConfig2 = {
        type: "pie",
        width: 280,
        height: 280,
        series: [15, 65, 83],
        options: {
          chart: {
            toolbar: {
              show: true,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
            textAnchor: 'end',
            
            style: {
              colors: ['#00']
            },
          },
          colors: ["#799351", "#5D9C59", "#9ADA1F"],
          legend: {
            show: false,
          },
        },
      };
    
      const data = [
        {
          name: 'Item A',
          quantity: 50
        },
        {
          name: 'Item A',
          quantity: 600
        },
        {
          name: 'Item A',
          quantity: 400
        },
        {
          name: 'Item A',
          quantity: 950
        }
      ]
      const data2 = [
        {
          name: 'Item A',
          quantity: 50
        },
        {
          name: 'Item B',
          quantity: 60
        },
        {
          name: 'Item C',
          quantity: 400
        },
        {
          name: 'Item D',
          quantity: 280
        }
      ]
    
      const TABLE_ROWS = [
        {
          img: "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Black Coffee",
          sku: "890",
          amount: "$35.00",
          quantity: 76
        },
        {
          img: "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Bread",
          sku: "1231190",
          amount: "$12.00",
          quantity: 6
        },
        {
          img: "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Sandwich",
          sku: "1237890",
          amount: "$65.00",
          quantity: 197
        }
      ];
      const TABLE_HEAD = ["Product","SKU" ,"Price", "Quantity"];
    
  return (
    <>
        <section className='flex flex-col gap-2 basis-[50%] '>
            <div className='flex justify-center items-center basis-[50%]'>
              <div className='bg-white/40 rounded-2xl p-4 flex flex-col items-center justify-center w-[95%] h-[95%] shadow-2xl'>
                <div className='basis-[20%] w-full flex items-center justify-between gap-2'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg> */}
                    <div>
                    <Typography variant="h5" color="blue-gray">Total Sales</Typography>
                    <small className='text-gray-500'>Sales could be higher or lower</small>
                    </div>
                    <div className='flex items-center justify-center '>
                    <select className="border border-gray-300 rounded-lg p-2 px-2">
                      <option value="today">Today</option>
                      <option value="monthly">Monthly</option>
                      <option value="weekly">Weekly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                    </div>

                </div>
                <div className='w-full basis-[80%] '>
                <Chart {...chartConfig}  />
                </div>
              </div>
            </div>
            
            <div className='grid grid-cols-2 gap-6 basis-[50%] w-[95%] h-[60%] m-2 mx-6 '>
              <div className='bg-white/40 rounded-2xl p-2s h-full w-[25rem] flex flex-col items-center justify-center shadow-2xl '>
                    <Typography variant="h3" color="blue-gray">Revenue</Typography>
                    <small className='text-gray-500'>Track the revenue of your business</small>
                    <div className='flex justify-center items-center basis-[80%] '>
                      <Chart {...pieChartConfig2} className='!text-black'/>
                    </div>
              </div>
              <div className='bg-white/40 rounded-2xl p-2s h-full w-[25rem] flex flex-col items-center justify-center shadow-2xl '>
                    <Typography variant="h3" color="blue-gray">Outflow</Typography>
                    <small className='text-gray-500'>Track the outflow of your business</small>
                    <div className='flex justify-center items-center basis-[80%] '>
                      <Chart {...pieChartConfig} className='!text-black'/>
                    </div>
              </div>
            </div>
        </section>

        <section className='flex flex-col  gap-2 basis-[50%]  items-center my-2 '>
            <div className='grid grid-cols-2 gap-2 basis-[50%] w-full h-full'>
                  <div className='bg-white/40 rounded-2xl p-4 h-48 w-[26rem] flex flex-col shadow-2xl'>
                    <div className='flex basis-[95%] items-center gap-4'>
                      <div className='flex flex-col basis-[50%]'>
                      <h6 className='text-gray-500'>Total Revenue</h6>
                      <Typography variant="h2" color="blue-gray">$8780</Typography>
                      </div>
                      <LineChart data={data} />
                    </div>
                    <div className='flex basis-[20%] '>
                      <div className='flex justify-left items-center gap-2 w-full basis-[100%] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <span className='text-green-500'>12% </span>
                        <small className='text-gray-500'>vs last month</small>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/40 rounded-2xl p-4 h-48 w-[26rem] flex flex-col shadow-2xl'>
                    <div className='flex basis-[95%] items-center gap-4'>
                      <div className='flex flex-col basis-[50%]'>
                      <h6 className='text-gray-500'>Total Visitors</h6>
                      <Typography variant="h2" color="blue-gray">567</Typography>
                      </div>
                      <LineChart data={data2} />
                    </div>
                    <div className='flex basis-[20%] '>
                      <div className='flex justify-left items-center gap-2 w-full basis-[100%] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <span className='text-green-500'>8.1% </span>
                        <small className='text-gray-500'>vs last month</small>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/40 rounded-2xl p-4 h-48 w-[26rem] flex flex-col shadow-2xl'>
                    <div className='flex basis-[95%] items-center gap-4'>
                      <div className='flex flex-col basis-[50%]'>
                      <h6 className='text-gray-500'>Total Products</h6>
                      <Typography variant="h2" color="blue-gray">786</Typography>
                      </div>
                      <LineChart data={data} />
                    </div>
                    <div className='flex basis-[20%] '>
                      <div className='flex justify-left items-center gap-2 w-full basis-[100%] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <span className='text-green-500'>9.2% </span>
                        <small className='text-gray-500'>vs last month</small>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/40 rounded-2xl p-4 h-48 w-[26rem] flex flex-col shadow-2xl'>
                    <div className='flex basis-[95%] items-center gap-4'>
                      <div className='flex flex-col basis-[50%]'>
                      <h6 className='text-gray-500'>Total Income</h6>
                      <Typography variant="h2" color="blue-gray">$1200</Typography>
                      </div>
                      <LineChart data={data} />
                    </div>
                    <div className='flex basis-[20%] '>
                      <div className='flex justify-left items-center gap-2 w-full basis-[100%] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <span className='text-green-500'>4% </span>
                        <small className='text-gray-500'>vs last month</small>
                      </div>
                    </div>
                  </div>
            </div>

            <div className='flex justify-left items-center basis-[49%] w-full h-full '>
              <div className='bg-white/40 rounded-2xl p-4 flex w-[53rem] h-full flex-col shadow-2xl'>
               <div className="flex flex-col h-[25rem] w-full gap-2 p-2  overflow-y-auto custom-scrollbar">
                  <div className='basis-[10%] flex items-center justify-center mb-2'>      
                    <h1 className='text-2xl font-semibold justify-self-center self-center'>Best Selling Products</h1>
                  </div>

                    <table className="w-full min-w-max table-auto text-left basis-[90%] ">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th key={head} className="  p-4 rounded-lg">
                              <Typography variant="small" color="blue-gray" className="font-bold leading-none opacity-70">
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className=''>
                        {TABLE_ROWS.map(({ img, name, sku,amount, quantity }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast ? "p-2" : "p-2 ";

                          return (
                            <tr key={name}>
                              <td className={classes}>
                                <div className="flex items-center gap-3 ">
                                  <Avatar
                                    src={img}
                                    alt={name}
                                    size="md"
                                    className="border border-blue-gray-50 bg-blue-gray-50/50  p-1 bg-cover w-20 h-20  rounded-full"
                                  />
                                  <Typography variant="" color="blue-gray" className="font-bold truncate ...">
                                    {name}
                                  </Typography>
                                </div>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {sku}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {amount}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {quantity}
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
        </section>

    </>
  )
}

export default Overview