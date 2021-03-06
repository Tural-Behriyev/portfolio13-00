import React from 'react'
/* google da axtar: fetch 
***how to fetch local json data in JS
async await in JS (asyncron function)*/

const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experince</h1>
            </div>

            <div className='container experience-wrapper'>

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timeline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>


                 {/* experience1 */}

                 <div className='timeline-block timeline-block-left'>
                     <div className='marker'></div>
                     <div className='timeline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* experience2 */}

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timeline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* experience3 */}

                 <div className='timeline-block timeline-block-left'>
                     <div className='marker'></div>
                     <div className='timeline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* experience4 */}

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timeline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

            </div>
            
        </div>
    )
}

export default Experience