import React from 'react'
import { List, ListItem, Card } from '@mui/material'
import frappe from '../assets/imgs/frappe.jpg'
import water from '../assets/imgs/waterSell.jpg'
import coffee from '../assets/imgs/blackcoffee.jpg'
import frieren from '../assets/imgs/frieren.jpg'
import cashierTest from '../assets/imgs/cashierTest.jpg'
import { Select, Option, Button,Typography, Badge } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'


function GeneralService() {

    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: 'Frappe',
            description: 'Caramel Frappe, Caramel syrup, Milk, Ice Cream',
            category: 'Coffee',
            size: "300ml",
            price: '$ 10.00',
            image: frappe,
            sku: 'FRAPPE01',
            isVariant: false,
        },
        {
            id: 2,
            name: 'Water',
            description: 'Cold Water ',
            price: '$ 10.00',
            image: water,
            sku: 'WATER01',
            isVariant: true,
        },
        {
            id: 3,
            name: 'Coffee',
            description: 'Black Coffee, American Coffee',
            category: 'Coffee',
            size: "300ml",
            price: '$ 10.00',
            image: coffee,
            sku: 'COFFEE01',
            isVariant: false,
        }
        ,
        {
            id: 4,
            name: 'Frieren',
            description: "Frieren from Frieren's journey",
            category: 'Coffee',
            size: "300ml",
            price: '$ 12.00',
            image: frieren,
            sku: 'FRIE01',
            isVariant: true,
        }
    ]

    const orderSummary = [
        {
            id: 1,
            productId: 1,
            quantity: 2,
            name: 'Frappe',
            description: 'Caramel Frappe, Caramel syrup, Milk, Ice Cream',
            size: '300ml',
            type: 'Unique',
            image: frappe,
            price: '$ 20.00',
            sku: 'FRAPPE01-2',
        },
        {
            id: 2,
            productId: 2,
            quantity: 1,
            name: 'Water',
            description: 'Cold Water',
            size: '500ml',
            type: 'Lemonade',
            image: water,
            price: '$ 10.00',
            sku: 'WATER01-LM-500ML',
        },
        {
            id: 3,
            productId: 4,
            quantity: 1,
            name: 'Frieren',
            description: "Frieren from Frieren's journey",
            size: 'Small',
            type: null,
            image: frieren,
            price: '$ 12.00',
            sku: 'FRIE01-SMALL',
        }
    ]

    const labels = ['All', 'Food', 'Drinks', 'Snacks', 'Candy','Ice Cream','Coffee']

    const paymentMethods = ['Cash', 'Card','Paypal','Apple Pay']

  return (
    <>
    <section className='flex justify-between h-full  rounded-3xl '>
            <div className='flex  flex-col basis-[70%] p-2  justify-center bg-gray-100 rounded-3xl max-w-[70%] ' >
                <div className='flex flex-col basis-[20%] h-full  space-y-10 '>
                    <div className='flex justify-between w-full h-10  px-4 mt-4'>
                        <h1 className='text-3xl font-bold font-mono basis-[50%]'>Coffee & Beverages</h1>
                        
                        <div className="basis-[50%] flex text-xl ">
                            <input
                                type="text"
                                className="w-full placeholder-gray-400 text-gray-900 p-4 rounded-l-xl"
                                placeholder="Search"
                            />
                            <button className='flex  items-center bg-black text-white px-4 rounded-r-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                            
                        </div>
                    </div>

                    <div className='flex justify-left  overflow-x-auto gap-6 custom-scrollbar overflow-y-hidden  max-w-[80rem]'>
                       {
                        labels.map((label) => (
                            <div className='rounded-xl p-2 px-4 whitespace-nowrap  flex justify-center items-center cursor-pointer border-2 border-white  bg-white   hover:border-2 hover:border-[#705C53] hover:text-[#705C53]'>
                                <Typography variant='h6' className='text-lg '>{label}</Typography>
                            </div>
                        ))
                       }
                    </div>
                </div>

                <div className='flex basis-[80%] h-full '>
                    <div className='flex flex-col gap-4 w-full '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold font-mono'>All Products</h1>
                            <small className='text-gray-500 text-xl font-mono mr-8'>6 Results</small>

                        </div>

                        <section className='grid grid-cols-3 gap-4 overflow-y-auto justify-center items-center  custom-scrollbar w-full h-[45rem]'>
                            {
                                products.map((product) => (
                                    <ItemPanel key={product.id} {...product} />
                                ))
                            }
                        </section>
                    </div>
                </div>

            </div>
            <div className='flex flex-col basis-[30%] max-w-[30%]  bg-white  p-8 rounded-3xl'>
                    <div className='flex justify-left items-center gap-4 '>
                        <img src={cashierTest} alt="" className='w-28 h-24 shadow-xl rounded-2xl object-cover' />
                        <div className='flex  gap-8 w-full justify-between'>
                            <div className='flex flex-col gap-2 basis-[50%] justify-end'>
                                <h1 className='text-gray-500'>Current cashier</h1>
                            {/* <h1 className='text-2xl font-bold text-gray-800'>Marceline</h1> */}
                            <select className='bg-[#f8f4f3] text-black text-lg  font-spaceGrotesk rounded-xl p-2 px-4 appearance-none custom-select'>
                                <option value="1">Marceline</option>
                                <option value="2">Cashier 2</option>
                                <option value="3">Local</option>
                            </select>
                            </div>
                            <div className='flex flex-col  gap-2'>
                                <Button className='flex flex-row gap-2 justify-center items-center'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                       <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                    <h1 className='text-md font-mono'>Close
                                    </h1>

                                </Button>
                                <Button className='flex flex-row gap-2 justify-center items-center'
                                onClick={()=>{
                                    navigate('/PreService')
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                    </svg>
                                    <h1 className='text-md font-mono'>Return</h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <section className='flex flex-col mt-4 gap-6'>
                        <h1 className='text-2xl font-bold font-mono'>Order Summary</h1>
                        <div className='flex flex-col gap-2 h-96 overflow-y-auto custom-scrollbar'>
                           {
                            orderSummary.map((product) => (
                                <OrderSummaryItem key={product.id} {...product} />
                            ))
                           }
                        </div>
                    </section>
                    <section className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-lg font-semibold font-mono'>Subtotal</h1>
                            <h1 className='text-lg font-semibold font-mono'>$ 42.00</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1 className='text-md  font-mono'>Extra Charge</h1>
                            <h1 className='text-md  font-mono'>$ 0</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1 className='text-md  font-mono'>Discount</h1>
                            <h1 className='text-md  font-mono'>$ 0</h1>
                        </div>
                        <div className='border-b-2 border-dashed mb-2 border-gray-300'></div>
                        <div className="flex justify-between">
                            <h1 className='text-lg font-bold font-mono'>Total</h1>
                            <h1 className='text-lg font-bold font-mono'>$ 42.00</h1>
                        </div>
                    </section>

                    
                    <section className='flex flex-col justify-left  p-2 mt-2  h-full'>
                            <h1 className='text-xl font-bold font-mono'>Payment Method</h1>
                            <div className='flex gap-6 mt-4 p-2 w-[28.rem] h-32 overflow-x-auto custom-scrollbar'>
                               
                                {
                                    paymentMethods.map((paymentMethod) => (
                                        <div className='flex flex-col justify-center items-center bg-[#f8f4f3] rounded-xl px-14 py-6 hover:border-2 hover:border-[#705C53] hover:text-[#705C53] border-2 border-white gap-2'>
                                            {
                                                paymentMethod === 'Card' ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                                    </svg> 
                                                ) : (
                                                    paymentMethod === 'Cash' ? (
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                                        </svg>

                                                    </>) : (
                                                        <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                                    </svg>
                                                    </>
                                                    )
                                                )
                                                
                                            }
                                            
                                            <h1 className='font-bold max-w-[100px] text-center truncate'>{paymentMethod}</h1>                                            
                                            
                                        </div>
                                    ))
                                }

                            </div>
                          
                    </section>
                    <div className='flex justify-end items-end h-24'>

                   <div className='w-full'>
                   <Button fullWidth>
                            <h1 className='text-md font-mono basis-[50%]'>Charge $42.00</h1>
                        </Button>
                   </div>
                    </div>
            </div>
            
    </section>
    </>
  )
}

export default GeneralService




function ItemPanel(product) {

    //get variants by productId
    const variants = [
        {
            id: 1,
            productId: 2,
            type: 'Lemonade',
            size: 'small',
            price: '$ 12.00',
            sku: 'WATER01-LM-500ML',
            stock: 10,
        },
        {
            id: 2,
            productId: 2,
            type: 'Lemonade',
            size: 'medium',
            price: '$ 14.00',
            stock: 10,
            sku: 'WATER01-LM-1L',
        },
        {
            id: 3,
            productId: 2,
            type: null,
            size: 'medium',
            price: '$ 14.00',
            stock: 10,
            sku: 'WATER01-600ML',
        },
        {
            id: 4,
            productId: 2,
            type: 'Mango',
            size: 'small',
            price: '$ 14.00',
            stock: 10,
            sku: 'WATER01-600ML',
        },
        {
            id: 5,
            productId: 4,
            type: null,
            size: 'small',
            price: '$ 14.00',
            stock: 10,
            sku: 'FRIE01-SMALL',
        },
        {
            id: 6,
            productId: 4,
            type: null,
            size: 'medium',
            price: '$ 14.00',
            stock: 10,
            sku: 'FRIE01-MEDIUM',
        }
    ]
    const types = []
    const sizes = []

    variants.map((variant) => {
        if (variant.type) {
            if (!types.includes(variant.type)) {
                types.push(variant.type)
            }
        }
        if (variant.size) {
            if (!sizes.includes(variant.size)) {
                sizes.push(variant.size)
            }
        }
    })

  return (
      
    <div className='w-96 h-[27rem] bg-white shadow-xl rounded-3xl flex flex-col p-2'>
        <section className='flex p-4 gap-2 basis-[40%] bg-'>
            <img src={product.image} alt="" className='w-48 h-48 rounded-3xl shadow-xl basis-[40%]' />
            <div className='flex flex-col justify-between p-2 basis-[60%]'>
                <div className='flex flex-col gap-2'>   
                    <h1 className='text-xl font-bold font-mono'>{product.name}</h1>
                    <h1 className='text-md font-mono text-gray-500'>{product.description}</h1>
                </div>
                <h1 className='text-xl font-bold font-mono '>{product.price}</h1>
                
            </div>
            
        </section>
        {
                product.isVariant ? (
                    <div className='flex gap-2 p-4 basis-[50%] '>

                        <div className='w-1/2 flex flex-col  gap-4 '>     
                            <h1 className='text-xl font-bold font-mono'>Size</h1>
                            <div className='flex gap-4 '>
                              {
                                
                               sizes.length > 0 ? (
                                sizes.length > 3 ? (
                                    <select  className='py-3 px-4 pe-9 block w-full bg-[#f8f4f3] border-gray-200 rounded-xl  text-lg disabled:opacity-50 disabled:pointer-events-none custom-select' >
                                    {
                                        sizes.map((size) => (
                                                <option key={size}>{size[0].toUpperCase()+size.slice(1)}</option>
                                            
                                        ))
                                    }
                                    </select>
                                   ) : (
                                    sizes.map((size) => (
                                        <div className='bg-[#f8f4f3] rounded-full p-2 w-12 h-12 flex justify-center items-center'>
                                            {size.charAt(0).toUpperCase()}
                                        </div>
                                    ))
                                   )
                               ) : (
                                <div className='w-1/2 flex flex-col  gap-4 '>     
                                    <h1 className='text-xl font-bold font-mono'>Size</h1>
                                    <div className='flex gap-4'>
                                    <span className='text-gray-500 text-xl font-mono'>{product.size}</span>
                                    </div>
                                    
                                </div>
                               )
                            }
                                    
                              </div>
                                   
                            
                        </div>
                        <div className='flex flex-col basis-[50%] gap-4'>
                            <h1 className='text-xl font-bold font-mono'>Type</h1>
                            <select  className='py-3 px-4 pe-9 block w-full bg-[#f8f4f3] border-gray-200 rounded-xl text-lg disabled:opacity-50 disabled:pointer-events-none custom-select' >
                            {
                                types.length > 0 ? (
                                    types.map((type) => (
                                        <option key={type}>{type}</option>
                                    ))
                                ) : (
                                    <option>No types</option>
                                )
                            }
                            </select>
                        </div>
                        
                    
                    </div>
                ) : (
                    <div className='flex gap-2 p-4 basis-[50%]  '>

                    <div className='w-1/2 flex flex-col  gap-4 '>     
                        <h1 className='text-xl font-bold font-mono'>Size</h1>
                          <div className='flex gap-4'>
                          <span className='text-gray-500 text-xl font-mono'>{product.size}</span>
                          </div>
                        
                    </div>
                    <div className='flex flex-col basis-[50%] gap-4'>
                        <h1 className='text-xl font-bold font-mono'>Type</h1>
                       <span className='text-gray-500 text-xl font-mono'>Unique</span>
                    </div>
                
                </div>
                )
            }
            <div className='flex flex-row gap-2 h-full items-center justify-end basis-[10%] mx-2 mb-2'>
            {/* <div className='basis-[10%]'>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </Button> 
            </div> */}
            <div className='basis-[100%] justify-center items-center flex'>
                <button className='bg-black text-white rounded-xl w-[78%] h-10'>
                    Add to Cart
                </button>
                {/* <Button fullWidth  className='flex flex-row gap-2 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </Button> */}
                </div>
            </div>
    </div>
    
  )
}

function OrderSummaryItem(product) {
  return (
    
    <div className='flex items-center gap-4 p-2'>
        <div>
            <img src={product.image} alt="" className='bg-black w-16 h-16 rounded-xl basis-[20%] ' /> 
        </div>
       <section className='flex flex-wrap gap-2 basis-[85%] h-full p-2 relative '>

            <div className='flex  gap-2 w-[100%] h-[30%] '>
                <h1 className='text-lg font-mono text-black font-semibold'>{product.name}</h1>
                <div className='flex items-center justify-between gap-4'>
                
                </div>
            </div>
          

        <div className='flex  items-center justify-between  w-full '>
                    <div className='flex items-center justify-self-start justify-between gap-4'>
                        <div className='flex items-center justify-center p-1 px-2 bg-[#f8f4f3] rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>
                            </div>

                    <h1 className='text-xl font-mono text-black'>{product.quantity}</h1>
                    <div className='flex items-center justify-center p-1 px-2 bg-[#f8f4f3] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    </div>

            <div>
            <h1 className='text-lg font-mono text-black'>{product.price}</h1>
            </div>
        </div>
        
       </section>
    </div>

    
    
  )
}

