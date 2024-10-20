"use client";
import { SeekSolutionApi } from '@/utils/SeekSolutionApi';
import { Tooltip } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FooterPage = () => {
  const api = new SeekSolutionApi();
  const [socialLinks, setSocialLinks] = useState<Array<{
    _id:string,
    name:string,
    icon:string,
    href:string  
  }>>([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await api.SocialLinks.get();


        setSocialLinks(response);
      } catch (error) {
        console.error('Failed to load socialLinks:', error);
      }
    };

    fetchSocialLinks();
  }, [api]);


  
  return (
    <>
      <footer className='flex flex-col md:flex-row justify-around items-center mt-10 px-3 mx-10 md:px-10 gap-10px'>
        <div className='ftr-rht text-center md:text-left mb-4 md:mb-0'>
          <img
            src="https://seeksolution.in/static/media/favicon.f61d9487b8e127a74f59.png"
            alt="Logo"
            className='mx-auto md:mx-0'
          />
          <p className='mt-5 mb-2 text-slate-700'>Stay Updated with D2CX</p>
          <div className='mt-4 px-2 py-2 bg-slate-900 border border-white rounded-lg flex items-center justify-center md:justify-start'>
            <input className='outline-none bg-slate-900 text-white' type="text" placeholder='Email' />
            <button className='bg-orange-400 px-4 py-2 rounded-lg ml-2'>Submit</button>
          </div>
        </div>

        <div className='ftr-lft flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left'>
          <div>
            <h1 className='font-bold text-lg'>Course</h1>
            <ul className='mt-5 leading-6'>
              <li><a className='text-gray-300 hover:underline' href="">About</a></li>
              <li><a className='text-gray-300 hover:underline' href="">Why Join</a></li>
              <li><a className='text-gray-300 hover:underline' href="">Who Should Join</a></li>
              <li><a className='text-gray-300 hover:underline' href="">Curriculum</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Support</h1>
            <ul className='mt-5 leading-6'>
              <li><Link className='text-gray-300 hover:underline' href={"/faq"}>
                FAQs
              </Link></li>
              <li><Link className='text-gray-300 hover:underline whitespace-nowrap' href={"/contact-us"}>
                Contact Us
              </Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <hr className='mt-10 w-[90%] mx-auto' />
      <div className='flex flex-col md:flex-row justify-between items-center mt-10 pb-10 mx-20'>
        <div className='flex items-center flex-col md:flex-row'>
          <img
            style={{ height: "60px" }}
            src="https://seeksolution.in/static/media/favicon.f61d9487b8e127a74f59.png"
            alt="Logo"
            className='mb-4 md:mb-0'
          />
          <p className='mt-2 text-slate-700'>Copyright @Inc42 Media 2023</p>
        </div>
        <div className='flex gap-4 items-center mt-4 md:mt-0'>
          {socialLinks.map((link) =>
          <Tooltip key={link._id} title={link.name}>
            <a key={link._id} href={link.href} target='_blank' >
              <img style={{height:"25px",width:"25px"}} src={link.icon} alt="" />
            </a>
            </Tooltip>
            
          )}
          
        </div>

      </div>
    </>
  );
}

export default FooterPage;
