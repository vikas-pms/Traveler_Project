"use client"
import { Collapse } from 'antd';
import { useState } from 'react';
const FaqPage = (props: {
  faqs: Array<{
    "_id": string,
    "title": string,
    "description": string
  }>
}) => {
  const [activeKey, setActiveKey] = useState<string | string[]>('1'); 
  const onChange = (key: string | string[]) => {
    setActiveKey(key);
  };
  const items = props.faqs.map((faq, index) => ({
    key: faq._id,
    label: faq.title,
    children: <p>{faq.description}</p>
  }));
  return (
    <div className="min-h-screen  bg-black-100 py-28">
      <div className=" w-[80%]  mx-auto bg-slate-900 shadow-md rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
        <Collapse 
          items={items}
          activeKey={activeKey}
          onChange={onChange}
          defaultActiveKey={['1']} 
        />
      </div>
    </div>
  );
}
export default FaqPage;