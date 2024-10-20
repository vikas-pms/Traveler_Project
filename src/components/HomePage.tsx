import { CalendarOutlined, ClockCircleOutlined, GiftOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons'
import React from 'react'

function HomePage() {
    return (
        <>
            <div className='text-center p-5 md:p-10'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl w-[90%] md:w-[70%] lg:w-[44%] mx-auto font-bold'>
                    Master <span className='bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'>10X D2C Growth</span> In 12 Weeks
                </h1>

                <div className='flex flex-col md:flex-row justify-center gap-5 mt-5 md:mt-10'>
                    <span className='flex items-center justify-center gap-2'> 
                        <GiftOutlined className='!text-orange-500' /> Live & Hybrid
                    </span>
                    <span className='flex items-center justify-center gap-2'>
                        <CalendarOutlined className='!text-orange-500' /> Cohort 3 starts on 20th November 2024
                    </span>
                </div>

                <div className='bg-slate-900 w-[90%] md:w-[70%] lg:w-[50%] mx-auto px-2 py-5 rounded-md mt-5'>
                    <div className='flex flex-col gap-5 md:flex-row md:justify-center md:gap-10'>
                        <button className='bg-orange-400 px-10 py-3 rounded-md w-full md:w-auto'>
                            Apply Now
                        </button>
                        <span className='flex items-center justify-center border rounded-lg px-5 py-3 gap-2 w-full md:w-auto'>
                            <VerticalAlignBottomOutlined className='rounded-md px-2 py-2 bg-slate-500' /> 
                            Download Full Curriculum
                        </span>
                    </div>

                    <p className='mt-5 text-white'> 
                        <ClockCircleOutlined className='!text-orange-500' /> Cohort 3 Applications Are Now Open!
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomePage
