import axios from 'axios'
import { useEffect, useState } from 'react'


function Blog() {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        axios('/data/blog.json')
        .then(res => setBlogs(res.data))
    },[])
    return (
        <>
        <article className= 'container' style={{marginTop:'100px'}}>   
                <h4 className='text-center fw-bold '>Latest Blogs</h4>
                <h1 className='text-center fw-bold mb-5'>Our Insights & Articles</h1>
            <div className='row row-cols-lg-3 g-4'>
            {
                blogs.map(blog =>(
                    <article key={blog.id}>
                        <div className="card h-100 shadow rounded-3" >
                    <img src={blog.img} className="card-img-top h-50" alt=""/>
                    <div className="card-body">
                    <h5 className="card-title my-3">{blog.tittle}</h5>
                    <p className='text-muted'>{blog.description}</p>
                    <a className='fw-bold text-decoration-none my-4'>Learn More <i className="bi bi-arrow-right"></i></a>
                    </div>
                    </div>
                    </article>
                ))
            }
            </div>
        </article>
        </>
    )
}

export default Blog;
