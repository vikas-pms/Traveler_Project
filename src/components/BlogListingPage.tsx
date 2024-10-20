"use client";
import React from 'react';
import { DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import Link from 'next/link';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BlogListPage = (props: {
  blogsList: Array<{
    _id: string;
    title: string;
    description: string;
    content:string;
    likesCount: number; 
    dislikesCount: number; 
    comments: Array<any>;
  }>;
}) => (
  <div  className='bg-slate-900 pt-5 pb-5' >
    <h1 className='text-center text-3xl font-bold'>Blogs List</h1>
    <List
     
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.blogsList}
      renderItem={(item) => (
        <List.Item
          key={item._id}
          actions={[
            <IconText icon={LikeOutlined} text={item.likesCount.toString()} key="list-vertical-star-o" />, 
            <IconText icon={DislikeOutlined} text={item.dislikesCount.toString()} key="list-vertical-like-o" />, 
            <IconText icon={MessageOutlined} text={item.comments.length.toString()} key="list-vertical-message" />, 
          ]}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     src="https://cdn.shortpixel.ai/spai/w_710+q_glossy+ret_img+to_webp/bold.expert/wp-content/uploads/2025/07/shutterstock_2446570873-2048x1341.jpg"
          //   />
          // }
        >
          <List.Item.Meta

            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item._id}`} />}
            title={<Link href={"/blog"} >{item.title} </Link>}
            description={item.description}
          />
          <p className="text-white">{item.content}</p>
        </List.Item>
      )}
    />
  </div>
);

export default BlogListPage;
