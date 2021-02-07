import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab)

const SocialLinks = (props) => {
    return (
        <>
            <a className={props.className} href="share">Share</a>
              <a className={props.className} href="www.facebook.com">
                <FontAwesomeIcon
                  size="2x"
                  className="accordion-card-links__icons"
                  icon={["fab", "facebook-f"]}
                />
              </a>
              <a className={props.className} href="www.twitter.com">
                <FontAwesomeIcon
                  size="2x"
                  className="accordion-card-links__icons"
                  icon={["fab", "twitter"]}
                />
              </a>

        </>
    )
}

export default SocialLinks
