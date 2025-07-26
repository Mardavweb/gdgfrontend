import { useState } from 'react'
import './App.css'
import Polygon1 from './assets/Polygon 1.png'
import Group4 from './assets/Group 4.png'
import girl from './assets/girl.png'
import Group7 from './assets/Group 7.png'
import Group9 from './assets/Group 9.png'
import Rectangle6 from './assets/Rectangle 6.png'
import Rectangle7 from './assets/Rectangle 7.png'
import Group10 from './assets/Group 10.png'
import profilepic from './assets/profilepic.png'
import Ellipse4 from './assets/Ellipse 4.png'

function App() {

  return (
    <>
    <div className='w-[1670px] min-h-screen overflow-x-hidden'style={{ backgroundColor:'rgba(255,242,225,1)'}}>
      <div className='w-[83px] h-[83px] top-[60px] left-[100px] rotate-0 opacity-100 rounded-[6px] absolute'>
        <img src={Polygon1} />
      </div>
      <span className='w-[128px] h-[48px] top-[77px] left-[122px] rotate-0 opacity-100 absolute
          font-bold text-[32px] leading-[1] tracking-[0.04em] font-poppins text-[#113C49]'>
          Skilline
      </span>
      <div className='flex justify-between items-center px-8 ml-110'>
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
        <div className=' w-[160px] h-[60px] top-[71px] left-[1440px] rotate-0 opacity-100 rounded-[80px] flex items-center justify-center' style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}>
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
      <div className='w-[681px] h-[162px] absolute top-[335px] left-[140px] rotate-0 opacity-100 text-left'>
        <span className='font-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] text-[#F48C06]'>Studying</span>
        <span className='font-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] text-[#252641]'> Online is now</span>
        <span className='mtfont-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] text-[#252641]'> much easier</span>
      </div>
      <div className='w-[523px] h-[76px] absolute top-[531px] left-[140px] rotate-0 opacity-100 text-left'>
        <span className='font-[Nunito Sans] font-normal text-[24px] leading-[160%] tracking-[0%]'>Skilline is an interesting platform that will teach you in more an interactive way</span>
      </div>
      <div className='flex'>
      <div className='w-[220px] h-[80px] absolute top-[659px] left-[140px] rotate-0 opacity-100 rounded-[80px] bg-[#F48C06] flex items-center justify-center'>
        <button className='w-[144px] h-[36px] top-[681px] left-[178px] rotate-0 opacity-100
        font-[Poppins] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]
        hover:scale-105 transition duration-200 cursor-pointer'>
          Join for free
          </button>
      </div>
        <button className='w-[80px] h-[80px] absolute top-[659px] left-[400px] rotate-0 opacity-100
        hover:scale-105 transition duration-200 cursor-pointer'>
          <img src={Group4}/>
        </button>
        <div className='w-[232px] h-[36px] absolute top-[681px] left-[512px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-normal text-[24px] leading-[100%] tracking-[0%] text-[rgba(37,38,65,1)]'>
            Watch how it works
          </span>
        </div>
      </div>
      <div className='w-[544px] h-[892px] absolute top-[224px] left-[1088px] rotate-0 opacity-100'>
        <img src={girl} />
      </div>
      <div className='w-[300px] h-[100px] absolute top-[409px] left-[950px] rotate-0 opacity-100'>
        <img src={Group7}/>
      </div>
      <div className='w-[69px] h-[69px] absolute top-[354px] left-[1560px] rotate-0 opacity-100'>
        <img src={Group9} />
      </div>
      <div className='w-[370px] h-[110px] absolute top-[604px] left-[1424px] rotate-0 opacity-100 rounded-[20px]'>  
      <img src= {Group10}/>
      </div>
      <div className='w-[390px] h-[187px] absolute top-[744px] left-[883px] rotate-0 opacity-100 rounded-[20px]'>
        <img src={Rectangle6}/>
        <div className='w-[56px] h-[56px] absolute top-[10px] left-[20px] rotate-0 opacity-100'>
          <img src={profilepic} />
        </div>
        <div className='w-[240px] h-[43px] absolute top-[0px] left-[65px] rotate-0 opacity-100'>
          <span className='font-nunito text-[20px] leading-[180%] tracking-[0.02em] text-[rgba(89, 89, 89, 1);]'>User Experience Class</span>
        </div>
        <div className='w-[178px] h-[36px] absolute top-[28px] left-[87px] rotate-0 opacity-100 text-left'>
          <span className='font-nunito text-[15px] leading-[180%] tracking-[0.02em] text-[rgba(84, 85, 103, 1);]'>Today at 12.00 PM</span>
        </div>
        <div className='w-[170px] h-[35px] absolute top-[58px] left-[80px] rotate-0 opacity-100 rounded-[80px]
        hover:scale-105 transition duration-200 cursor-pointer' style={{backgroundColor: 'rgba(216,88,126,1)'}}>
          <button className='w-[85px] h-[27px] absolute top-[3px] left-[45px] rotate-0 opacity-100
          font-nunito font-bold text-[15px] leading-[100%] tracking-[0em] text-white
          hover:scale-105 transition duration-200 cursor-pointer'>Join Now</button>
        </div>
        <div className='w-[20px] h-[20px] absolute top-[50px] left-[60px] rotate-0 opacity-100'>
          <img src={Ellipse4}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default App