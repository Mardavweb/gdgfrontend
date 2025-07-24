import { useState } from 'react'
import './App.css'
import Polygon1 from './assets/Polygon 1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[83px] h-[83px] top-[60px] left-[100px] rotate-0 opacity-100 rounded-[6px] absolute'>
        <img src={Polygon1} />
      </div>
      <span className='w-[128px] h-[48px] top-[77px] left-[122px] rotate-0 opacity-100 absolute
          font-bold text-[32px] leading-[1] tracking-[0.04em] font-poppins text-[#113C49]'>
          Skilline
      </span>
      <div className='flex justify-between items-center px-8 ml-35'>
        <div className='flex gap-8 text-[#252641] font-poppins text-[22px] ml-100'>
        <button className='w-[67px] h-[33px] top-[86px] left-[811px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]'>
        Home
      </button>
      <button className='w-[90px] h-[33px] top-[86px] left-[958px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]'>
        Careers
      </button>
      <button className='w-[50px] h-[33px] top-[86px] left-[1128px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]'>
        Blog
      </button>
      <button className='w-[102px] h-[33px] top-[86px] left-[1258px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]'>
        About us
      </button>
      </div>
    <div className="flex items-center gap-4">
        <div className=' w-[160px] h-[60px] top-[71px] left-[1440px] rotate-0 opacity-100 rounded-[80px] flex items-center justify-center'>
          <button className='w-[61px] h-[33px] top-[84px] left-[1490px] rotate-0 opacity-100
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%] text-[ rgba(108,108,108,1)]
          hover:scale-105 transition duration-200 cursor-pointer'>
            Login
          </button>
        </div>
        <div className='w-[160px] h-[60px] top-[71px] left-[1634px] opacity-100 rounded-[80px] flex items-center justify-center'
        style={{ backgroundColor: 'rgba(244,140,6,1)' }}>
          <button className='w-[87px] h-[33px] top-[84px] left-[1671px] opacity-100
          font-[Poppins] font-medium text-[22px] leading-[100%] tracking-[2%] text-[rgba(255,255,255,1)] items-center justify-center
          hover:scale-105 transition duration-200 cursor-pointer'>
            Sign Up
          </button>
        </div>
        </div>

      </div>
    </>
  )
}

export default App