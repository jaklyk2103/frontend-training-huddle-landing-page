import './HuddleLandingPage.scss'
import BackgroundDesktop from './images/BackgroundDesktop'
import BackgroundMobile from './images/BackgroundMobile'
import Logo from './images/Logo'
import IllustrationMockups from './images/IllustrationMockups'

const HuddleLandingPage = () => {
  return (
    <div className='container'>
      <BackgroundMobile />
      <Logo className='logo' />
      <IllustrationMockups className='illustrations' />
      <div className='title'></div>
      <div className='content'></div>
      <div className='button'></div>
      <div className='socials'></div>
    </div>
  )
}

export default HuddleLandingPage