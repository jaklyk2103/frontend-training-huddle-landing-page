import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons' 

const SocialsSection = () => {
  return (
    <div className='socials-section-container'>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  )
}

export default SocialsSection