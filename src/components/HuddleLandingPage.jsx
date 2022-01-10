import './HuddleLandingPage.scss'
import BackgroundDesktop from './images/BackgroundDesktop'
import BackgroundMobile from './images/BackgroundMobile'
import Logo from './images/Logo'
import IllustrationMockups from './images/IllustrationMockups'
import SocialsSection from './SocialsSection'
import texts from './texts'

const HuddleLandingPage = () => {
  return (
    <div className='container'>
      <BackgroundMobile />
      <Logo className='logo' />
      <IllustrationMockups className='illustrations' />
      <div className='title'>{texts.title}</div>
      <div className='content'>{texts.content}</div>
      <div className='button'>{texts.buttonAction}</div>
      <div className='socials'></div>
      <img src='./images/images/illustration-mockup.svg' />
      <SocialsSection />
    </div>
  )
}

export default HuddleLandingPage