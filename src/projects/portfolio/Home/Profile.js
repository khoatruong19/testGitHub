import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, 
        faGithub, faGooglePlus, 
        faYoutubeSquare, faTwitterSquare 
        } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
    return (
        <div className = "profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook}  size="lg " />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram}  size="lg " />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faGooglePlus}  size="lg " />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faYoutubeSquare}  size="lg " />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitterSquare}  size="lg " />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
