import React from 'react'
//arrow functaion

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src="https://source.unsplash.com/random" alt="" />
                    </div>
                </div>
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>About me</h1>
                <p className='p-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nihil perspiciatis esse recusandae, delectus unde aut non voluptatibus assumenda, tempora doloremque nobis animi totam magni ipsa explicabo error perferendis dolore qui itaque cum reiciendis! Officia, consequuntur rem minima ut molestiae dolores, aperiam perferendis doloremque porro nobis beatae. Nihil, ratione pariatur.</p>
                </div>    
            </div>
            
        </div>
    )
}

export default AboutMe

