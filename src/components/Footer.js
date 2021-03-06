import React, { useCallback, useContext } from 'react'
import '../scss/footer.css'     
import { CursorContext } from './CursorContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const [ , setCursor ] = useContext(CursorContext);

    const handleCursorScale = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    },[setCursor]);


    return (
        <div className='footer'>
            <div className="left_footer"
            onMouseEnter = {handleCursorScale}
            onMouseLeave = {handleCursorScale}>
                {/* <span> Mail:- </span> <br/> srivastavasahaj24@gmail.com  */}
                <span style={{padding: '1rem'}}><FontAwesomeIcon icon={faEnvelope} style={{ marginRight:'0.8rem'}} size='lg'/> {'  ' }srivastavasahaj24@gmail.com</span>
            </div>
            <div className="right_footer"
            onMouseEnter = {handleCursorScale}
            onMouseLeave = {handleCursorScale}>
                <a href="https://github.com/Sahaj-Srivastava24"><FontAwesomeIcon className='icon' icon = {faGithub} size='2x'/></a>
                <a href="https://www.linkedin.com/in/sahaj-srivastava-69079a1ba/"><FontAwesomeIcon className='icon' icon = {faLinkedin} size='2x'/></a>
            </div>
        </div>
    )
}
