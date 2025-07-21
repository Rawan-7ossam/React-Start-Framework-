import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
export default function Footer() {
  return (
    <div id='footer' className='text-white pt-5'>
        <div  className="container  mb-5">
            <div className="row py-5 gy-5">
                <div className="col-md-4 ">
                    <div className="inner text-center">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="inner text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons d-flex justify-content-center">
                            <div  className="footer-icon d-flex justify-content-center align-items-center rounded-circle">
                                <FontAwesomeIcon icon={faFacebook} id='facebook'/>
                            </div>
                            <div className="footer-icon d-flex justify-content-center align-items-center rounded-circle">
                                 <FontAwesomeIcon icon={faTwitter} id='twitter'/>
                            </div>
                             <div className="footer-icon d-flex justify-content-center align-items-center rounded-circle">
                                  <FontAwesomeIcon icon={faLinkedinIn} id='linkedin'/>
                            </div>
                            <div className="footer-icon d-flex justify-content-center align-items-center rounded-circle">
                                   <FontAwesomeIcon icon={faGlobe} id='globe'/>
                            </div>
                             
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="inner text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright text-center text-white  py-3  ">
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}
