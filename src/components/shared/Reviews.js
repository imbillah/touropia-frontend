import axios from "axios";
import { useEffect, useState } from "react";


function Reviews() {
    const [reviews, setReviews]= useState([])

    useEffect(()=>{
        axios('/data/reviews.json')
        .then(res => setReviews(res.data))
    },[])
    
    return (
        <div className='container custom-margin' style={{marginTop:'100px'}}>
            <p className='text-center lead text-custom'>Our Inpiration</p>
            <h1 className='text-center text-custom fw-bold'>What out clients said</h1>
            <div className='row row-cols-lg-2 g-3 mt-4'>
            {
                reviews.map(review =>(
                    <div>
                        <div className='d-flex p-2 shadow rounded-3 mx-lg-4 h-100 bg-custom'>
                            <img src={review.img} className='w-25 me-3 rounded-circle my-auto' alt="" />
                            <div className='p-3'>
                                <h4>{review.name}</h4>
                                <h6>{review.country}</h6>
                                <p>Rating: {review.ratings} <i className="bi bi-star-fill text-warning"></i></p>
                                <p className='text-muted'>{review.remarks}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Reviews;
