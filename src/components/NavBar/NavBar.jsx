import React from 'react'
import LogoOceanVision from '../../assets/images/logotipo com texto horizontal.png'
import LanguageSelector from '../LanguagesSelector/LanguagesSelector'
import OceanVisionLogo from '../../assets/icons/OceanVisionLogo'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <OceanVisionLogo/>
            <LanguageSelector />
            {/* <img src={LogoOceanVision} alt="logo-ocean-vision" className='logo-ocean-vision' /> */}
        </nav>
    )
}

export default NavBar