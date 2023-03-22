import {
    NavBarContainer,
    DropdownList,
    NavItem,
    MenuIcon,
    Alessandra,
    IconList,
    IconLink
} from './nav-styles'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { RiBehanceFill } from 'react-icons/ri'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

    const [colorChange, setColorchange] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeColor);

  return (
    <>
    <NavBarContainer className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <IconList>
            <Alessandra to='/' className={colorChange ? 'alessandra colorChange' : 'alessandra'}>
                Alessandra M
            </Alessandra>
            <IconLink 
                to='https://www.linkedin.com/in/alessandra-marchiori/'
                className={colorChange ? 'icon colorChange' : 'icon'}
            >
              <FaLinkedinIn/>
            </IconLink>
            <IconLink 
                to='https://github.com/amarchiori'
                className={colorChange ? 'icon colorChange' : 'icon'}
            > 
              <FaGithub /> 
            </IconLink>
            <IconLink 
                to='https://www.behance.net/alessm96'
                className={colorChange ? 'icon colorChange' : 'icon'}
            >
              <RiBehanceFill />
            </IconLink>     
        </IconList> 
        <MenuIcon 
            onClick={toggleDropdown}
            className="scale-2"
        />
        {isOpen && (
            <DropdownList isOpen={isOpen}>
                <NavItem to='/frontend' onClick={handleClick}>FRONTEND</NavItem>
                <NavItem to='/uxui' onClick={handleClick}>UX/UI</NavItem>
                <NavItem to='/typography' onClick={handleClick}>TYPOGRAPHY</NavItem>
                <NavItem to='/animation' onClick={handleClick}>ANIMATION</NavItem>
            </DropdownList>
        )}
    </NavBarContainer>
    <Outlet/>
    </>
  )
}

export default NavBar