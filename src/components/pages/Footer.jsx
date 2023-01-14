import "./Footer.css"

import Instagram from '..//../assets/images/Instagram.png'
import Facebook from '..//../assets//images/Facebook.png'
import Mail from '..//../assets//images/Mail.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
        <div className="social-links">
            <div className="link-container">
                <img src={Instagram} alt="description" className='link-icon'/>
                <a href='https://www.instagram.com/ocean_vision_cv' className='link'>ocean_vision_cv</a>
            </div>
            
            <div className="link-container">
                <img src={Facebook} alt="description" className='link-icon'/>
                <a href='https://www.facebook.com/profile.php?id=100088434805718' className='link'>ocean vision </a>
            </div>   
            
            <div className="link-container">
                <img src={Mail} alt="description" className='link-icon'/>
                <p className='link'>oceanvisioncv@gmail.com</p>
            </div>
           </div>
           <p className='copyright'> Copyright © 2022 Ocean Vision</p>
        </footer>
    )
}

export default Footer