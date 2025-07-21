import React from 'react'
import './StartFramework.css'
import mePic from '../../assets/avataaars.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StartFramework() {
  return (
    <div id='start-framework' className='.container-fluid d-flex justify-content-center align-items-center'>

        <div className="container">
            <div className="inner-image  m-auto pb-3">
                 <img src={mePic} alt="" className='w-100' />
            </div>
            <div id='heading' className='py-3 text-center text-white' >
                    <h2  className='text-uppercase fw-bolder text-white'>start framework</h2>
                <div className="lines d-flex justify-content-center pt-2 align-items-center ">
                    <div className="div-startframework"></div>
                    <FontAwesomeIcon icon={faStar} className='px-3 star-icon-sf' />
                    <div className='div-startframework'></div>
                </div>
                <p className='pt-3'>Graphic Artist - Web Designer - Illustrator</p>
           
        </div>
        
      
    </div>
    </div>
  )
}
