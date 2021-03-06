import React from 'react';
import './socialMediaBage.scss';



const SocialMediaBage = (props) => {
    const {name, link, image} = props;
    return (
        <a className="social-media" href={link}>
            <img src={image} alt={name}/>
        </a>
    )

};

export default SocialMediaBage;