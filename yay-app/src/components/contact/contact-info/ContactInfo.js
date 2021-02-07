import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faEnvelope, faPhone)






const ContactInfo = () => {
    return (
        <ul className="d-flex flex-column contact-list">
            <li className="contact-list-li">
                <FontAwesomeIcon size="2x" className="contact-list-li__icon"  icon= "envelope"/>
                <p><a href="mailto:hello@yay.com">hello@yay.com</a></p>
            </li>
            <li className="contact-list-li">
                <FontAwesomeIcon size="2x" className="contact-list-li__icon" icon= "phone" />
                <p>123 456 7890</p>
            </li>
            <li className="contact-list-li">
                <FontAwesomeIcon size="2x" className="contact-list-li__icon" icon= "map-marker-alt" />
                <div>
                    <p>123 Some Street</p>
                    <p>Somewhere</p>
                    <p>Some City</p>
                    <p>10000</p>
                </div>
            </li>
            
        </ul>
    )
}

export default ContactInfo
