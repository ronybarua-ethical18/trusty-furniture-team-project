import React from 'react';
import blog6 from '../../images/blog6.jpg';
import blog7 from '../../images/blog7.jpg';
import blog8 from '../../images/blog8.jpg';
import LatestBlogDetail from '../LatestBlogDetail/LatestBlogDetail';

const blogData = [
    {
        pic: blog7,
        title: 'Why Brands are Looking at Local Language',
        author: "By Robert Norby / 18th March 2018",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam dolorem Minima tempore inventore unde ut sed assumenda pariatur eligendi iure."
    },
    {
        pic: blog6,
        title: 'Why Brands are Looking at Local Language',
        author: "By Robert Norby / 18th March 2018",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam dolorem Minima tempore inventore unde ut sed assumenda pariatur eligendi iure."
    },
    {
        pic: blog8,
        title: 'Why Brands are Looking at Local Language',
        author: "By Robert Norby / 18th March 2018",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam dolorem Minima tempore inventore unde ut sed assumenda pariatur eligendi iure."
    }

]
const LatestBlog = () => {
    return (
        <div className="container mt-5 pt-5">
            <h3 className="latest-blog pb-5 mb-4 text-secondary">Latest Blogs</h3>
           <div className="row justify-content-center">
           {
                blogData.map( blog =>  <LatestBlogDetail blog={blog}></LatestBlogDetail>)
            }
           </div>
        </div>
    );
};

export default LatestBlog;