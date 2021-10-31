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
        <article className= 'container custom-margin' style={{marginTop:'100px'}}>   
                <h4 className='text-center fw-bold text-custom '>Latest Blogs</h4>
                <h1 className='text-center fw-bold mb-5 text-custom'>Our Insights & Articles</h1>
            <div className='row row-cols-lg-3 g-4'>
            {
                blogs.map(blog =>(
                    <article key={blog.id}>
                        <div className="card h-100 shadow rounded-3 bg-custom" >
                        <img src={blog.img} className="card-img-top h-50" alt=""/>
                        <div className="card-body">
                        <h4 className="card-title my-3 text-custom">{blog.tittle}</h4>
                        <p className='text-muted lh-lg'>{blog.description}</p>
                        <a className='fw-bold text-decoration-none my-4 text-custom'>Learn More <i className="bi bi-arrow-right"></i></a>
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
