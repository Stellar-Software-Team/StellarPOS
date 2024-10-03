import { Outlet } from 'react-router-dom'
import HomeNavbar from './HomeNavbar'



function Home() {
  
  return (
    <>
      <section className='flex flex-col h-full !bg-gray-100 '>
        <div className='flex flex-col basis-[7%] w-full '>
          <HomeNavbar />
        </div>
        <div className='flex justify-self-center m-2 gap-2 basis-[90%] w-[99%] '>
          <Outlet />
        </div>
      </section>

    </>
  )
}

export default Home
