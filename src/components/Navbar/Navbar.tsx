import logo from '../../assets/logo.svg'
import { scroller } from 'react-scroll'
import './Navbar.scss'
import { useState } from 'react'

function ScrollButton (props: any) {
  function scrollToComponent() {
    console.log('nav')
    scroller.scrollTo(props.targetId, {
      duration: 800,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <button className="primary" onClick={scrollToComponent}>{props.children}</button>
  )
}

function Hamburger() {
  return (
    <div className="hamburger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  function toggleHamburger() {
    console.log('toggle')
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <nav>
      <img src={logo} alt="brand logo" className="brand-icon"/>
      <div className={`menu ${hamburgerOpen ? 'open' : ''}`}>
        <ScrollButton targetId="services">Services</ScrollButton>
        <ScrollButton targetId="services">Industries</ScrollButton>
        <ScrollButton targetId="studies">Cases</ScrollButton>
        <ScrollButton targetId="footer">Contact</ScrollButton>
      </div>
      <button className='negative-primary talk'>Let's Talk</button>
      <div className='hamburger-wrapper' onClick={toggleHamburger}>
        <Hamburger />
      </div>
    </nav>
  )
}