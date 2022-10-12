import './login.css';
import React  from 'react';





function Login (){
   return(
   <>
    <div className='contianer'>
      <div className='image'>
  <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" alt="Pic" />
      </div>
        <div>
            <p className='h1'>Login to continue</p>
        </div>
       <div>
        <form>
 
   
         <input type="text" name="name"  placeholder='Email' className='field email'/> <br />

           <input type="password" placeholder='Password'   className='field pass'/> <br />
          <div className='checkbox'> <input type="checkbox"  className='check'/> <p>Remember</p> <p className='forget'>Forget 
            Password?</p></div>
          <button className='submit'>Submit</button>
       </form>
       <div className='signup'>or signup with using</div>
       <div className='social'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7y4cEij0T78S2WxMp6RA5foiJCUp089Zq-Gcy1JobI49LPSoxsceBedd7kTYg8tZ2r8&usqp=CAU" className='facebook' alt="" />
        <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" className='twitter' alt="" />
       </div>
</div>
        </div>
         </>
     );
 }
 





export default Login;