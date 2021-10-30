import image from '../../media/images/about-us.png'
function AboutUs() {
    return (
        <div>
            <article className ='container d-lg-flex'>
                <div className='custom-width'>
                <img src={image} className='img-fluid rounded-circle mt-4' alt="aboutus" />
                </div>
                <div className='mt-5 custom-width'>
                <h2 className='fw-bold mt-5'>About us</h2>
                <p className='text-muted lh-lg mt-3'>MediCare was established in 1983 by Dr. Prathap C Reddy, renowned as the architect of modern healthcare in India. As the nation’s first corporate hospital, MediCare is acclaimed for pioneering the private healthcare revolution in the country.</p>
                <p className='text-muted lh-lg'>      
                We believe Learning is the source of human progress. It has the power to transform our world from illness to health, from poverty to prosperity, from conflict to peace. It has the power to transform our livesfor ourselves, for our families, for our communities.
                No matter who we are or where we are, learning empowers us to change and grow and redefine what’s possible. That’s why access to the best learning is a right, not a privilege.
                </p>
                </div>
            </article>
        </div>
    )
}

export default AboutUs;
