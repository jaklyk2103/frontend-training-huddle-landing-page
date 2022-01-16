import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons' 

const SocialsSection = () => {
  return (
    <div className='socials-section-container'>
      <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
      <FontAwesomeIcon className='social-icon' icon={faTwitter} />
      <FontAwesomeIcon className='social-icon' icon={faInstagram} />
    </div>
  )
}

export default SocialsSection