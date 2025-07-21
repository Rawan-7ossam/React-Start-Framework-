import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faPlus } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.css'

import poert1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <div id='portfolio' className='d-flex justify-content-center  text-white pb-4'>
            <div className="container-fluid  ">
                <div className="inner ">
                    <div id='heading' className='py-3'>
                        <h2  className='text-uppercase fw-bolder text-center'>portfolio component</h2>
                        <div className="lines d-flex justify-content-center pt-2 align-items-center">
                            <div className="div-portfolio"></div>
                            <FontAwesomeIcon icon={faStar} className='px-3 star-icon' />
                            <div className='div-portfolio'></div>
                        </div>
                    </div>   
               <div>
  <div className="container">
                         <div className="row gy-5">
                        <div className="col-md-4">
                            <div className="item pb-5" data-bs-toggle="modal" data-bs-target="#poert1">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={poert1} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>   
                            </div>
                            <div className="item" data-bs-toggle="modal" data-bs-target="#poert1">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={poert1} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-md-4">
                             <div className="item pb-5" data-bs-toggle="modal" data-bs-target="#port2">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={port2} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>   
                            </div>
                             <div className="item" data-bs-toggle="modal" data-bs-target="#port2">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={port2} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>   
                            </div>
                        </div>

                         <div className="col-md-4">
                             <div className="item pb-5" data-bs-toggle="modal" data-bs-target="#port3">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={port3} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>   
                            </div>
                             <div className="item" data-bs-toggle="modal" data-bs-target="#port3">
                                <div className="inner-item position-relative rounded-3 ">
                                     <img src={port3} alt="" className='w-100 rounded-3'/>
                                     <div className="layer bg-danger position-absolute d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                                     </div>
                                </div>   
                            </div>
                        </div>
                    </div>   
                    </div>
  {/* Modal */}
  <div className="modal" id="poert1" tabIndex={-1} aria-labelledby="poert1Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content w-100">
       
        <div className="modal-body p-0 w-100">
           <img src={poert1} alt="" className='w-100'/>
        </div>
        
      </div>
    </div>
  </div>

   <div className="modal" id="port2" tabIndex={-1} aria-labelledby="port2Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content w-100">
       
        <div className="modal-body p-0 w-100">
           <img src={port2} alt="" className='w-100'/>
        </div>
        
      </div>
    </div>
  </div>

   <div className="modal" id="port3" tabIndex={-1} aria-labelledby="port3Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content w-100">
       
        <div className="modal-body p-0 w-100">
           <img src={port3} alt="" className='w-100'/>
        </div>
        
      </div>
    </div>
  </div>
</div>

                    

                    
                    
                </div>
                
            </div>
        </div>
  )
}
