import './HuddleLandingPage.scss'
import SocialsSection from './SocialsSection'
import texts from './texts'

const HuddleLandingPage = () => {
  return (
    <div className='container'>
      <img className='logo' src='logo.svg' />
      <img className='illustration' src='illustration-mockups.svg' />
      <div className='title'>{texts.title}</div>
      <div className='content'>{texts.content}</div>
      <button className='button'>{texts.buttonAction}</button>
      <div className='socials'></div>
      <SocialsSection />
    </div>
  )
}

export default HuddleLandingPage