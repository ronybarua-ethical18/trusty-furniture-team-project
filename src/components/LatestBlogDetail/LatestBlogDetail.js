import React from 'react';
import './LatestBlogDetail.css'

const LatestBlogDetail = ({blog}) => {
    return (
        <div>
            <div className="col-md-4">
                <div className="blog-img-div"><img className="blog-img" src={blog.pic} alt="" srcset="" /></div>
                <div className="blog-detail pt-4">
                    <h6 className="title">{blog.title}</h6>
                    <p className="text-secondary">{blog.author}</p>
                    <p className="text-secondary text"><small>{blog.detail}</small></p>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogDetail;