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
import google from './assets/google.png'
import netflix from './assets/netflix.png'
import Airbnb from './assets/Airbnb.png'
import amazon from './assets/amazon.png'
import facebook from './assets/facebook.png'
import grab from './assets/grab.png'
import doc from './assets/doc.png'
import cal from './assets/cal.png'
import Group81 from './assets/Group 81.png'
import Group22 from './assets/Group 22.png'
import Group23 from './assets/Group 23.png'
import Ellipse12 from './assets/Ellipse 12.png'
import Ellipse13 from './assets/Ellipse 13.png'
import Rectangle18 from './assets/Rectangle 18.png'
import Rectangle17 from './assets/Rectangle 17.png'
import gg from './assets/gg.png'
import playbtn from './assets/playbtn.png'
import Ellipse22 from './assets/Ellipse 22.png'
import Ellipse21 from './assets/Ellipse 21.png'
import Ellipse19 from './assets/Ellipse 19.png'
import Group71 from './assets/Group 71.png'
import Ellipse24 from './assets/Ellipse 24.png'
import Group72 from './assets/Group 72.png'
import Group73 from './assets/Group 73.png'
import users2 from './assets/users 2.png'
import Ellipse20 from './assets/Ellipse 20.png'
import Group122 from './assets/Group 122.png'
import Ellipse106 from './assets/Ellipse 106.png'
import Ellipse107 from './assets/Ellipse 107.png'
import Rectangle64 from './assets/Rectangle 64.png'
import MaskGroup from './assets/Mask Group.png'
import Group89 from './assets/Group 89.png'
import Group90 from './assets/Group 90.png'
import Group88 from './assets/Group 88.png'
import Ellipse108 from './assets/Ellipse 108.png'
import Ellipse105 from './assets/Ellipse 105.png'
import Group124 from './assets/Group 124.png'
import Group106 from './assets/Group 106.png'
import Rectangle31 from './assets/Rectangle 31.png'
import Line5 from './assets/Line 5.png'
import Rectangle25 from './assets/Rectangle 25.png'
import image2 from './assets/image 2.png'
import image5 from './assets/image 5.png'
import image3 from './assets/image 3.png'
import image6 from './assets/image 6.png'
import Rectangle29 from './assets/Rectangle 29.png'
import Group32 from './assets/Group 32.png'
import Girlphoto from './assets/Girlphoto.png'
import Line3 from './assets/Line 3.png'
import Rectangle30 from './assets/Rectangle 30.png'
import Group29 from './assets/Group 29.png'

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
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]
      hover:scale-105 transition duration-200 cursor-pointer'>
        Home
      </button>
      <button className='w-[90px] h-[33px] top-[86px] left-[958px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]
      hover:scale-105 transition duration-200 cursor-pointer'>
        Careers
      </button>
      <button className='w-[50px] h-[33px] top-[86px] left-[1128px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]
      hover:scale-105 transition duration-200 cursor-pointer'>
        Blog
      </button>
      <button className='w-[102px] h-[33px] top-[86px] left-[1258px] rotate-0 opacity-100 
      font-normal text-[22px] leading-[1] tracking-[0.02em] font-poppins text-[#252641]
      hover:scale-105 transition duration-200 cursor-pointer'>
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
        <span className='font-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] text-[#2F327D]'> Online is now</span>
        <span className='mtfont-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] text-[#2F327D]'> much easier</span>
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

      <div>
        <div className='rw-[603px] h-[45px] absolute top-[1218px] left-[659px] opacity-100 rotate-0'>
          <span className='font-[Poppins] font-medium text-[28px] leading-[160%] tracking-[0.02em] text-[rgba(105,105,132,1)]'>Trusted by 5,000+ Companies Worldwide</span>
        </div>
        <div className='w-[168.3px] h-[54.7px] absolute top-[1305.92px] left-[292px] rotate-0 opacity-100'>
          <img src={google}/>
        </div>
        <div className='w-[151.34px] h-[40.71px] absolute top-[1315.14px] left-[536.04px] rotate-0 opacity-100'>
          <img src={netflix}/>
        </div>
        <div className='w-[161.32px] h-[49.93px] absolute top-[1305.92px] left-[763.11px] rotate-0 opacity-100'>
          <img src={Airbnb} />
        </div>
        <div className='w-[153.64px] h-[46.09px] absolute top-[1317.44px] left-[1000.17px] -rotate-0 opacity-100'>
          <img src={amazon} />
        </div>
        <div className='w-[193.37px] h-[38.41px] absolute top-[1306.69px] left-[1229.55px] rotate-0 opacity-100'>
          <img src={facebook}/>
        </div>
        <div className='w-[130.43px] h-[50.49px] absolute top-[1295.93px] left-[1498.66px] rotate-0 opacity-100'>
          <img src={grab}/>
        </div>
      </div>
      
      <div>
        <div className='w-[501px] h-[65px] absolute top-[1524px] left-[713px] rotate-0 opacity-100'>
          <span className='font-poppins font-bold text-[36px] leading-[180%] tracking-[0%] text-[#2F327D]'>All-In-One</span>
          <span className='font-poppins font-bold text-[36px] leading-[180%] tracking-[0%] text-[#F48C06]'> Cloud Software.</span>
        </div>
        <div className='w-[837px] h-[86px] absolute top-[1609px] left-[545px] rotate-0 opacity-100'>
          <span className='font-poppins font-normal text-[24px] leading-[180%] tracking-[0%] text-center text-[#696984]'>
            Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </span>
        </div>
        <div className='w-[450px] h-[430px] absolute top-[1855px] left-[225px] rotate-0 opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_rgba(38,45,118,0.08)]'>
          <div className='w-[343px] h-[90px] absolute top-[150px] left-[55px] rotate-0 opacity-100'>
            <span className='font-poppins font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D]'>
              Online Billing,<br /> Invoicing, & Contracts
            </span>
          </div>
          <div className='w-[341px] h-[144px] absolute top-[280px] left-[55px] rotate-0 opacity-100'>
            <span className='font-poppins font-normal text-[18px] leading-[180%] tracking-[0%] text-center text-[#696984]'>
              Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
            </span>
          </div>
          <div className='mw-[100px] h-[100px] absolute top-[-80px] left-[120px] rotate-0 opacity-100'>
            <img src={doc} />
          </div>
        </div>
        <div className='w-[450px] h-[430px] absolute top-[1855px] left-[735px] rotate-0 opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_rgba(38,45,118,0.08)]'>
          <div className='w-[345px] h-[90px] absolute top-[145px] left-[60px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D]'>
              Easy Scheduling & Attendance Tracking
            </span>
          </div>
          <div className='w-[377px] h-[144px] absolute top-[280px] left-[42px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-normal text-[18px] leading-[180%] tracking-[0%] text-center text-[#696984]'>
              Schedule and reserve classrooms at<br/> one campus or multiple campuses.<br /> Keep detailed records of student <br />attendance
            </span>
          </div>
          <div className='mw-[100px] h-[100px] absolute top-[-70px] left-[130px] rotate-0 opacity-100'>
            <img src={cal}/>
          </div>
        </div>
        <div className='w-[450px] h-[430px] absolute top-[1855px] left-[1245px] rotate-0 opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_rgba(38,45,118,0.08)]'>
          <div className='w-[290px] h-[45px] absolute top-[150px] left-[85px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D]'>
              Customer Tracking
            </span>
          </div>
          <div className='w-[319px] h-[144px] absolute top-[276px] left-[75px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-normal text-[18px] leading-[180%] tracking-[0%] text-center text-[#696984]'>
              Automate and track emails to individuals or groups. Skilline’s built-in system helps organize<br/> your organization 
            </span>
          </div>
          <div className='mw-[100px] h-[100px] absolute top-[-75px] left-[135px] rotate-0 opacity-100'>
            <img src={Group81} />
          </div>
        </div>
      </div>

      <div>
        <div className='w-[371px] h-[79px] absolute top-[2443px] left-[775px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-semibold text-[44px] leading-[180%] tracking-[0%] text-center text-[#2F327D]'>
            What is{' '}
          </span>
          <span className='font-[Poppins] font-semibold text-[44px] leading-[180%] tracking-[0%] text-center text-[#F48C06]'>
            Skilline?
          </span>
        </div>
        <div className='w-[1101px] h-[129px] absolute top-[2542px] left-[409px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-normal text-[24px] leading-[180%] tracking-[0.02em] text-center text-[#696984]'>
            Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </span>
        </div>
        <div className='w-[600px] h-[400px] absolute top-[2751px] left-[310px] rotate-0 opacity-100 rounded-[20px] border border-solid border-black'>
          <img src={Group22}/>
          <div className='w-[292px] h-[48px] absolute top-[138px] left-[154px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-semibold text-[32px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]'>
              FOR INSTRUCTORS
            </span>
          </div>
          <button className='w-[283px] h-[80px] absolute top-[210px] left-[156px] rotate-0 opacity-100 rounded-[80px] border border-white
          hover:scale-105 transition duration-200 cursor-pointer'>
            <div className='w-[208px] h-[33px] absolute top-[28px] left-[50px] rotate-0 opacity-100'>
              <span className='font-[Poppins] text-[22px] leading-[100%] tracking-[0%] text-center text-white'>
                Start a class today
              </span>
            </div>
          </button>
        </div>
        <div className='w-[600px] h-[400px] absolute top-[2751px] left-[1010px] rotate-0 opacity-100 rounded-[20px]'>
          <img src={Group23} />
          <div className='w-[232px] h-[48px] absolute top-[140px] left-[183px] rotate-0 opacity-100'>
            <span className='font-[Poppins] font-semibold text-[32px] leading-[100%] tracking-[0%] text-center text-white'>
              FOR STUDENTS
            </span>
          </div>
          <button className='w-[283px] h-[80px] absolute top-[205px] left-[163px] rotate-0 opacity-100 rounded-[80px] bg-[rgba(35,189,238,0.9)]
          hover:scale-105 transition duration-200 cursor-pointer'>
            <div className='w-[202px] h-[33px] absolute top-[27px] left-[49px] rotate-0 opacity-100'>
              <span className='font-[Poppins] font-medium text-[22px] leading-[100%] tracking-[0%] text-cente text-white'>
                Enter access code
              </span>
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className='w-[73px] h-[73px] absolute top-[3362px] left-[186px] rotate-0 opacity-100'>
          <img src={Ellipse12} alt="ellipse" />
        </div>
        <div className='w-[655px] h-[116px] absolute top-[3375px] left-[211px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-medium text-[36px] leading-[160%] tracking-[0%] text-[#2F327D]'>
            Everything you can do in a physical classroom,{' '}
          </span>
          <span className='font-[Poppins] font-medium text-[36px] leading-[160%] tracking-[0%] text-[#F48C06]'>
            you can do with Skilline
          </span>
        </div>
        <div className='w-[730px] h-[172px] absolute top-[3521px] left-[211px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-normal text-[24px] leading-[180%] tracking-[0.02em] text-[#696984]'>
            Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure<br/> cloud-based system.
          </span>
        </div>
        <button className='w-[125px] h-[40px] absolute top-[3723px] left-[211px] rotate-0 opacity-100
        hover:scale-105 transition duration-200 cursor-pointer'>
          <span className='font-[Poppins] font-normal text-[22px] leading-[180%] underline underline-offset-0 decoration-[1px] text-[#696984]'>
            Learn more
          </span>
        </button>
        <div className='w-[30px] h-[30px] absolute top-[3594px] left-[902px] rotate-0 opacity-100'>
          <img src={Ellipse13} />
        </div>
        <div className='w-[138px] h-[138px] absolute top-[3311px] left-[988px] rotate-0 opacity-100 rounded-[20px]'>
          <img src={Rectangle18} />
        </div>
        <div className='w-[231px] h-[231px] absolute top-[3592px] left-[1502px] rotate-0 opacity-100 rounded-[20px]'>
          <img src={Rectangle17}/>
        </div>
        <div className='w-[705px] h-[471.08px] absolute top-[3331px] left-[1008px] rotate-0 opacity-100'>
          <img src={gg}/>
          <button className='mw-[70px] h-[70px] absolute top-[160px] left-[272px] rotate-0 opacity-100
          hover:scale-105 transition duration-200 cursor-pointer'>
            <img src={playbtn} />
          </button>
        </div>
      </div>

    <div>
        <div className='w-[239px] h-[65px] absolute top-[3983px] left-[841px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-bold text-[36px] leading-[180%] tracking-[0%] text-[#2F327D]'>
            Our{' '}
          </span>
          <span className='font-[Poppins] font-bold text-[36px] leading-[180%] tracking-[0%] text-[#F48C06]'>
            Features
          </span>
        </div>
        <div className='w-[888px] h-[43px] absolute top-[4068px] left-[516px] rotate-0 opacity-100'>
          <span className='font-[Poppins] font-normal text-[24px] leading-[180%] tracking-[0%] text-center text-[#696984]'>
            This very extraordinary feature, can make learning activities more efficient
          </span>
        </div>
        <div className='w-[140px] h-[140px] absolute top-[4211px] left-[233px] rotate-0 opacity-100'>
          <img src={Ellipse22}/>
        </div>
        <div className='w-[30px] h-[30px] absolute top-[4219px] left-[393px] rotate-0 opacity-100'>
          <img src={Ellipse21}/>
        </div>
      <div className='w-[264px] h-[264px] absolute top-[4597px] left-[777px] rotate-0 opacity-100'>
        <img src={Ellipse19} />
      </div>
      <div className='w-[896px] h-[522px] absolute top-[4287px] left-[170px] rotate-0 opacity-100'>
        <img src={Group71} />
      </div>
      <div className='w-[30px] h-[30px] absolute top-[4809px] left-[748px] rotate-0 opacity-100'>
        <img src={Ellipse20}/>
      </div>
      <div className='w-[542px] h-[128px] absolute top-[4328px] left-[1192px] rotate-0 opacity-100 text-left'>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
          A{' '}
        </span>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#F48C06]'>
          user interface
        </span>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
          {' '}designed for the classroom
        </span>
      </div>
      <div className='w-[60px] h-[60px] absolute top-[4517px] left-[1189px] rotate-0 opacity-100 shadow-custom-strong'>
        <img src={Ellipse24} />
        <div className='w-[12px] h-[26px] absolute top-[19px] left-[24px] rotate-0 opacity-100 rounded-[2px]'>
          <img src={Group72} />
        </div>
      </div>
      <div className='w-[60px] h-[60px] absolute top-[4641px] left-[1189px] rotate-0 opacity-100 shadow-custom-strong'>
        <img src={Ellipse24} />
        <div className='w-[12px] h-[26px] absolute top-[19px] left-[24px] rotate-0 opacity-100 rounded-[2px]'>
          <img src={Group73}/>
        </div>
      </div>
      <div className='w-[60px] h-[60px] absolute top-[4755px] left-[1189px] rotate-0 opacity-100 shadow-custom-strong'>
        <img src={Ellipse24} />
        <div className='w-[12px] h-[26px] absolute top-[19px] left-[24px] rotate-0 opacity-100'>
          <img src={users2} />
        </div>
      </div>
      <div className='w-[443px] h-[80px] absolute top-[4507px] left-[1291px] rotate-0 opacity-100 text-left'>
        <span className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
          Teachers don’t get lost in the grid view<br/>and have a dedicated Podium space.
        </span>
      </div>
      <div className='w-[443px] h-[80px] absolute top-[4627px] left-[1291px] rotate-0 opacity-100 text-left'>
        <span  className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
          TA’s and presenters can be moved to<br/> the front of the class.
        </span>
      </div>
      <div className='w-[443px] h-[80px] absolute top-[4747px] left-[1291px] rotate-0 opacity-100 text-left'>
        <span  className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
          Teachers can easily see all students and class data at one time.
        </span>
      </div>
   </div>

  <div>
   <div className='w-[393px] h-[128px] absolute top-[5210px] left-[239px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#F48C06]'>
        Tools{' '}
      </span>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
        For Teachers And Learners
      </span>
   </div>
   <div className='w-[568px] h-[160px] absolute top-[5358px] left-[239px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
        Class has a dynamic set of teaching tools built to<br/> be deployed and used during class.
        Teachers can<br/> handout assignments in real-time for students to complete and submit.
      </span>
      <div className='w-[637.2px] h-[611px] absolute top-[-330px] left-[804px] rotate-0 opacity-100'>
        <img src={Group122} />
      </div>
   </div>
  </div> 

  <div>
    <div className='w-[22.99px] h-[22.99px] absolute top-[5792px] left-[309.84px] rotate-0 opacity-100'>
      <img src={Ellipse107} />
    </div>
    <div className='w-[99.64px] h-[99.64px] absolute top-[5817.87px] left-[192px] z-0 rotate-0 opacity-100'>
      <img src={Ellipse106}/>
    </div>
    <div className='w-[465.62px] h-[562.39px] absolute top-[5836.07px] left-[237.99px] z-10 rotate-0 opacity-100 rounded-[18.21px] shadow-[0px_9.1px_43.69px_0px_rgba(40,43,111,0.10)] bg-white'>
      <div className='w-[174.37px] h-[47.90px] absolute top-[54.39px] left-[30px] rotate-0 opacity-100 rounded-[72.82px]'>
        <img src={Rectangle64}/>
        <div className='w-[108.26px] h-[33.53px] absolute top-[8.1px] left-[35px] rotate-0 opacity-100'>
          <span className='font-poppins font-normal text-[20.03px] leading-[160%] tracking-[0%] text-[#717FB0]'>
            Question 1
          </span>
        </div>
      </div>
      <div className='w-[387.06px] h-[103.47px] absolute top-[140.54px] left-[37.31px] rotate-0 opacity-100 text-left'>
        <span className='font-poppins font-semibold text-[30.95px] leading-[160%] tracking-[0%] text-[#55578D]'>
          True or false? This play takes place in Italy
        </span>
      </div>
      <div className='w-[456.04px] h-[255.63px] absolute top-[265px] left-[50.48px] rotate-0 opacity-100 rounded-[18.21px]">'>
        <img src={MaskGroup} />
      </div>
      <div className='w-[365.03px] h-[119.76px] absolute top-[450px] left-[214.97px] rotate-0 opacity-100'>
        <img src={Group89}/>
      </div>
      <div>
        <img className='w-[76.65px] h-[76.65px] absolute top-[-35px] left-[390px] rotate-[-10.96deg] opacity-100' src={Group90} />
      </div>
      <div>
        <img className='w-[76.65px] h-[76.65px] absolute top-[-6px] left-[410.79px] -rotate-[0.9deg] opacity-100' src={Group88} />
      </div>
      <div className='w-[16.29px] h-[16.29px] absolute top-[315px] left-[520px] rotate-0 opacity-100'>
        <img src={Ellipse108} />
      </div>
      <div className='w-[19.16px] h-[19.16px] absolute top-[590px] left-[0px] rotate-0 opacity-100'>
        <img src={Ellipse105} />
      </div>
      <div className='w-[347px] h-[128px] absolute top-[82px] left-[850px] rotate-0 opacity-100 text-left'>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
          Assessments,<br/>
        </span>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#F48C06]'>
          Quizzes
        </span>
        <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
          , Tests
        </span>
      </div>
      <div className='w-[596px] h-[120px] absolute top-[220px] left-[850px] rotate-0 opacity-100 text-left'>
        <span className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
          Easily launch live assignments, quizzes, and<br/> tests.
          Student results are automatically entered in<br/> the online gradebook.
        </span>
      </div>
    </div>
  </div>

  <div>
    <div className='w-[420.82px] h-[127.77px] absolute top-[6756.72px] left-[187px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#F48C06]'>
        Class Management<br/>
      </span>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
        Tools for Educators
      </span>
    </div>
    <div className='w-[645.72px] h-[159.72px] absolute top-[6904.46px] left-[187px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[22px] leading-[180%] tracking-[2%] text-[#696984]'>
        Class provides tools to help run and manage the class<br/> such as Class Roster, Attendance, and more. With the<br/> Gradebook, teachers can review and grade tests and<br/> quizzes in real-time.
      </span>
    </div>
    <div className='absolute w-[808.32px] h-[560px] top-[6604px] left-[923.68px] rotate-0 opacity-100'>
      <img src={Group124}/>
    </div>
  </div>

  <div>
    <div className='absolute w-[274px] h-[128px] top-[7440px] left-[1137px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#2F327D]'>
        One-on-One<br/>
      </span>
      <span className='font-poppins font-semibold text-[40px] leading-[160%] tracking-[0%] text-[#F48C06]'>
        Discussions
      </span>
    </div>
    <div className='absolute w-[540px] h-[120px] top-[7588px] left-[1137px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[22px] leading-[180%] tracking-[0.02em] text-[#696984]'>
        Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
      </span>
    </div>
    <div className='absolute w-[755.24px] h-[499px] top-[7324px] left-[191px] rotate-0 opacity-100'>
      <img src={Group106} />
    </div>
  </div>

  <div className='absolute w-[280px] h-[80px] top-[7973px] left-[820px] rotate-0 opacity-100 rounded-[80px]'>
    <img src={Rectangle31} />
    <button className='relative w-[204px] h-[43px] top-[-63px] left-[8px] rotate-0 opacity-100
      hover:scale-105 transition duration-200 cursor-pointer'>
      <span className='font-nunito font-normal text-[24px] leading-[180%] tracking-[0.02em] text-[#F48C06]'>
        See more features
      </span>
    </button>
  </div>

  <div>
    <div className='absolute w-[80px] h-px top-[8228px] left-[1001px] rotate-0 opacity-100 border-t border-[1px] border-solid'>
      <img src={Line5} />
    </div>
    <div className='absolute w-[188px] h-[27px] top-[8213px] left-[1111px] rotate-0 opacity-100'>
      <span className='font-nunito font-normal text-[20px] leading-[100%] tracking-[0.2em] text-[#525596]'>
        INTEGRATIONS
      </span>
    </div>
    <div className='absolute w-[480px] h-[116px] top-[8273px] left-[1001px] rotate-0 opacity-100 text-left'>
      <span className='font-nunito font-bold text-[36px] leading-[160%] tracking-[0%] text-[#2F327D]'>
        200+ educational tools and platform{' '}
      </span>
      <span className='font-nunito font-bold text-[36px] leading-[160%] tracking-[0%] text-[#F48C06]'>
        integrations
      </span>
    </div>
    <div className='absolute w-[687px] h-[129px] top-[8419px] left-[1001px] rotate-0 opacity-100 text-left'>
      <span className='font-nunito font-normal text-[24px] leading-[180%] tracking-[0%] text-[#696984]'>
        Schoology has every tool your classroom needs and comes<br/> pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
      </span>
    </div>
    <div className='absolute w-[280px] h-[80px] top-[8592px] left-[1000px] rotate-0 opacity-100 rounded-[80px]'>
      <img src={Rectangle25} />
      <button className='relative w-[196px] h-[40px] top-[-60px] left-[6px] rotate-0 opacity-100
      hover:scale-105 transition duration-200 cursor-pointer'>
        <span className='font-nunito font-normal text-[22px] leading-[180%] tracking-[0%] text-[#F48C06]'>
          See All Integrations
        </span>
      </button>
    </div>
    <div className='absolute w-[228px] h-[195px] top-[8225px] left-[231px] rotate-0 opacity-100'>
      <img src={image2} />
    </div>
    <div className='absolute w-[130px] h-[121px] top-[8300px] left-[550px] rotate-0 opacity-100'>
      <img src={image5} />
    </div>
    <div className='absolute w-[138px] h-[135px] top-[8504px] left-[310px] rotate-0 opacity-100'>
      <img src={image3}/>
    </div>
    <div className='absolute w-[159px] h-[159px] top-[8513px] left-[550px] rotate-0 opacity-100'>
      <img src={image6} />
    </div>
  </div>

  <div>
    <div className='absolute w-[80px] h-px top-[8856px] left-[200px] rotate-0 opacity-100 border border-solid border-[#525596]'>
      <img src={Line5} />
    </div>
    <div className='absolute w-[171px] h-[27px] top-[8842px] left-[310px] rotate-0 opacity-100'>
      <span className='font-nunito font-normal text-[20px] leading-[100%] tracking-[0.2em] text-[#525596]'>
        TESTIMONIAL
      </span>
    </div>
    <div className='w-[455px] h-[82px] absolute top-[8901px] left-[200px] rotate-0 opacity-100'>
      <span className='font-nunito font-bold text-[60px] leading-[100%] tracking-[0%] text-[#2F327D]'>
        What They Say?
      </span>
    </div>
    <div className='w-[607px] h-[84px] absolute top-[9012px] left-[205px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[26px] leading-[160%] tracking-[2%] text-[#696984]'>
        Skilline has got more than 100k positive<br/> ratings from our users around the world. 
      </span>
    </div>
    <div className='w-[573px] h-[84px] absolute top-[9122px] left-[205px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[26px] leading-[160%] tracking-[2%] text-[#696984]'>
        Some of the students and teachers were<br/> greatly helped by the Skilline. 
      </span>
    </div>
    <div className='w-[564px] h-[42px] absolute top-[9252px] left-[205px] rotate-0 opacity-100 text-left'>
      <span className='font-poppins font-normal text-[26px] leading-[160%] tracking-[2%] text-[#696984]'>
        Are you too? Please give your assessment 
      </span>
    </div>
    <button className='w-[403px] h-[80px] absolute top-[9337px] left-[200px] rotate-0 opacity-100 rounded-[80px]
    hover:scale-105 transition duration-200 cursor-pointer'>
      <img src={Rectangle29}/>
      <div className='w-[80px] h-[80px] relative top-[-80px] left-[323px] rotate-0 opacity-100'>
        <img src={Group32} />
        <div className='w-[259px] h-[35px] relative top-[-58px] left-[-280px] rotate-0 opacity-100 text-[#F48C06]'>
          <span className='font-poppins font-normal text-[22px] leading-[160%] tracking-[2%]'>
            Write your assessment
          </span>
        </div>
      </div>
    </button>
    <div className='w-[560px] h-[700px] absolute top-[8842px] left-[970px] rotate-0 opacity-100'>
      <img src={Girlphoto} />
    </div>
    <div className='w-[680px] h-[329px] absolute top-[9334px] left-[1039px] rotate-0 opacity-100 rounded-[20px] shadow-[2px_4px_60px_0px_#292C7C1A] bg-white'>
      <div className='w-[534px] h-[160px] relative top-[60px] left-[126px] rotate-0 opacity-100 text-left'>
        <span className='font-[Nunito_Sans] font-normal text-[22px] leading-[180%] tracking-[2%] text-[#5F5F7E]'>
          "Thank you so much for your help. It's exactly what<br/> I've been looking for. You won't regret it. It really<br/> saves me time and effort. Skilline is exactly what<br/> our business has been lacking."
        </span>
      </div>
      <div className='w-[139.01px] h-0 relative top-[-25px] left-[4px] rotate-90 opacity-100 border border-[#BDBDD1] '>
        <img src={Line3} />
      </div>
      <div className='w-[14px] h-[329px] absolute top-[1px] left-[px] rotate-0 opacity-100 rounded-tl-[20px] rounded-bl-[20px] bg-[#F67766] shadow-[2px_4px_60px_0px_#292C7C1A]'>
        <img src={Rectangle30} />
      </div>
      <div className='w-[127px] h-[43px] relative top-[99px] left-[128px] rotate-0 opacity-100'>
        <span className='font-[Nunito Sans] font-semibold text-[24px] leading-[180%] tracking-[0%] text-[#5F5F7E]'>
          Gloria Rose
        </span>
      </div>
      <div className='w-[137px] h-[23.98px] relative top-[66px] left-[500px] rotate-0 opacity-100'>
        <img src={Group29} />
      </div>
      <div className='w-[157px] h-[32px] relative top-[72px] left-[487px] rotate-0 opacity-100'>
        <span className='font-[Nunito_Sans] font-semibold text-[18px] leading-[180%] tracking-[2%] text-[#80819A]'>
          12 reviews at Yelp
        </span>
      </div>
    </div>
  </div>
  </>
  )
}

export default App