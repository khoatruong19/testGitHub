import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <h2>You never know how far you can go unless you go !!!</h2>
            <div className="info">
                <p>Contact me</p>
                <ul className="social-link">
                    <li className="social-item" >
                       <a href="https://www.facebook.com/khoa.truong.336333"  target="__blank" className="icon">
                           <FontAwesomeIcon icon={faFacebook}  size="lg " />
                        </a> 
                    </li>
                    <li className="social-item">
                    <a href="https://www.instagram.com/watchme990/"  target="__blank" className="icon">
                           <FontAwesomeIcon icon={faInstagram}  size="lg " />
                        </a> 
                    </li>
                    <li className="social-item">
                        <a href="https://stackoverflow.com/questions/2076109/how-to-avoid-a-new-line-with-p-tag"  target="__blank" className="icon">
                           <FontAwesomeIcon icon={faGithub} size="lg " />
                        </a> 
                    </li>
                </ul>
               
            </div>
        </div>
    )
}

export default Footer
