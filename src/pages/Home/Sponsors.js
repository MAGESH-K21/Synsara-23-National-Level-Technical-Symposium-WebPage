import React from 'react'
import bg1 from './Sponsers/cocacola.png'
import bg2 from './Sponsers/amazon.png'
import './Sponsers.css'


function Sponsors() {
  return (
    <div className='w-full mt-6 pl-10  lg:mr-8 lg:-mt-15 lg:pl-50 lg:pr-20'>
    <div className='lg:w-full overflow-hidden scale-100 pl-8 py-10 lg:pl-12 lg:py-10 w-11/12  bg-black/40 border-2 border-blue-900 rounded-xl' >
    <h1 className='w-full text-[white] text-center pb-2'>Title Sponsers<br></br></h1>
    <div className="sponsor-loop">
    <div className="sponsor"><img src={bg1} alt="Sponsor 1"/></div>
    <div className="sponsor"><img src={bg2} alt="Sponsor 2"/></div>
    </div>
    </div>
    </div>

  )
}

export default Sponsors