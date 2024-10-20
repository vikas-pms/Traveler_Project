"use client";
import { Flex } from 'antd';
import { useEffect, useRef, useState } from 'react';

const ScrollBarPage = (props: {
  introductions: Array<{
    "_id": string,
    "title": string,
    "subTitle": string,
    "topic": Array<string>,
    "customer": Array<string>
  }>
}) => {
  const containerRef = useRef<any>();
  const scrollRef = useRef<any>()

  const [lineHeight, setLineHeight] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const containerHeight = containerRef.current.clientHeight;

      const newHeight = Math.min(scrollPosition, containerHeight);
      // setLineHeight(() => newHeight - 150);
      scrollRef.current?.style?.setProperty("height", (newHeight - 300) + "px")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-gray-900 pt-10 pb-10 min-h-screen'>
      <div className='text-center mt-20 mb-20'>
        <h1 className='text-2xl font-bold text-white'>What will you learn?</h1>
        <p className='mx-auto mt-2 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus?
        </p>
      </div>
      <div className=' w-[60%] mx-auto mb-20 relative gap-3' ref={containerRef} >

        <Flex
          ref={scrollRef}
          className="absolute  left-1/2 transform -translate-x-1/2 bg-orange-500 w-2"
          vertical justify='end' align='baseline'
        >
          <div
            className={`absolute  left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full`}
            style={{
              border: "5px solid white",
              width: '20px',
              height: '20px',
            }}
          />

        </Flex>

        {props.introductions.map((res, index) =>
          <div key={res._id} className={`w-96 float-${index % 2 == 0 ? "left" : "right"} clear-both  p-4 bg-gray-600 rounded-lg text-white shadow-md transition-transform transform hover:scale-105 mb-4`} >
            <span className="font-semibold text-lg rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-2">{res.title}</span>
            <div className='bg-gray-800 p-4 mt-4 rounded-lg'>
              <h1 className='text-xl font-bold mb-5'>{res.subTitle}</h1>
              <p>Topic</p>
              <ul style={{listStyle:"disc", marginLeft:"40px"}}>
                {Array.isArray(res?.topic) &&res?.topic?.map((res)=><li key={res}>{res}</li>)}
              </ul>
              <p>Customer</p>
              <ul style={{listStyle:"disc", marginLeft:"40px"}}>
                {Array.isArray(res?.customer) &&res?.customer?.map((res)=><li key={res}>{res}</li>)}
              </ul>
            </div>
          </div>
        )}

        <div className='clear-both'></div>
      </div>
    </div>
  );
}

export default ScrollBarPage;
