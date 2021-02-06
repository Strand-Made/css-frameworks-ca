import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const ContactInfo = () => {
    return (
        <ul className="d-flex flex-direction-column contact-list">
            <li className="contact-list__li">
            <FontAwesomeIcon icon={[faEnvelope]} />
            <h5><a href="mailto:hello@yay.com">hello@yay.com</a></h5>
            </li>
            <li className="contact-list__li">
            <FontAwesomeIcon icon={[faPhone]} />
            <h5>123 456 7890</h5>
            </li>
            <li className="contact-list__li">
            <FontAwesomeIcon icon={[faMapMarkerAlt]} />
            <h5>123 Some Street
                Somewhere
                Some City
                    10000</h5>
            </li>
            
        </ul>
    )
}

export default ContactInfo
