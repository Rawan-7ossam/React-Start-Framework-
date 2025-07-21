import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <div id='about' className='d-flex justify-content-center align-items-center text-white'>
        <div className="container-fluid  ">
            <div className="inner ">
                <div id='heading' className='py-3'>
                    <h2  className='text-uppercase fw-bolder text-center text-white'>about component</h2>
                    <div className="lines d-flex justify-content-center pt-2 align-items-center">
                        <div className="div-about"></div>
                        <FontAwesomeIcon icon={faStar} className='px-3' />
                        <div className='div-about'></div>
                    </div>
                </div>
                
                <div className="inner-about w-75 m-auto">
                    <div className=" about-row container">
                        <div className="row ">
                            <div className="col-md-6 mb-2">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes <br/> the complete source files including HTML, CSS, and JavaScript as well as <br/> optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes <br/> the complete source files including HTML, CSS, and JavaScript as well as <br/> optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
