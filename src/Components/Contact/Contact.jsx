import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
const [isUserNameLabelVisible, setIsUserNameLabelVisible] = useState(false);
const [isUserAgeLabelVisible, setIsUserAgeLabelVisible] = useState(false);
const [isUserEmailLabelVisible, setIsUserEmailLabelVisible] = useState(false);
const [isUserPasswordLabelVisible, setIsUserPasswordLabelVisible] = useState(false);

function HandleUserNameLabelVisible(e){
        console.log(e);
        if (e.target.value.trim().length > 0) {
            setIsUserNameLabelVisible(true); 
        } else {
            setIsUserNameLabelVisible(false); 
        }
    }

    function HandleUserAgeLabelVisible(e){
        console.log(e);
        if (e.target.value.trim().length > 0) {
            setIsUserAgeLabelVisible(true); 
        } else {
            setIsUserAgeLabelVisible(false); 
        }
    }

    function HandleUserEmailLabelVisible(e){
        console.log(e);
        if (e.target.value.trim().length > 0) {
            setIsUserEmailLabelVisible(true); 
        } else {
            setIsUserEmailLabelVisible(false); 
        }
    }

    function HandleUserPasswordLabelVisible(e){
        console.log(e);
        if (e.target.value.trim().length > 0) {
            setIsUserPasswordLabelVisible(true); 
        } else {
            setIsUserPasswordLabelVisible(false); 
        }
    }


  return (
    <div id='contact' className='d-flex justify-content-center  pb-4'>
               <div className="container-fluid  ">
                   <div className="inner">
                       <div id='heading' className='pb-5 pt-4'>
                           <h2  className='text-uppercase fw-bolder text-center'>contact section</h2>
                           <div className="lines d-flex justify-content-center pt-2 align-items-center">
                               <div className="div-contact"></div>
                               <FontAwesomeIcon icon={faStar} className='px-3 star-icon' />
                               <div className='div-contact'></div>
                           </div>
                       </div>  
                        <div className="container w-50">
                            <form className='w-100 p-3 '>
                            <label className={isUserNameLabelVisible ? '' : 'd-none'}>userName :</label>
                            <input onInput={HandleUserNameLabelVisible} type="text" placeholder='userName' name='username' className='form-control border-0 border-bottom mb-4' />
                             <label className={isUserAgeLabelVisible ? '' : 'd-none'} >userAge :</label>
                             <input onInput={HandleUserAgeLabelVisible} type="text" placeholder='userAge' name='userage' className='form-control border-0 border-bottom  mb-4 ' />
                             <label className={isUserEmailLabelVisible ? '' : 'd-none'}>userEmail :</label>
                              <input onInput={HandleUserEmailLabelVisible} type="email" placeholder='userEmail' name='useremail' className='form-control border-0 border-bottom  mb-4 ' />
                              <label className={isUserPasswordLabelVisible ? '' : 'd-none'} >userPassword :</label>
                               <input onInput={HandleUserPasswordLabelVisible} type="password" placeholder='userPassword' name='userpassword' className='form-control border-0 border-bottom ' />

                               <button className='btn mt-4 text-white'>send message</button>

                        </form>
                        </div>
                        


                              
                    </div>
             </div>                 
    </div>                  
                   
  )
}
