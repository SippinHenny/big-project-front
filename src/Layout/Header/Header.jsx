import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";



class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerInner">
                    <Link to='/'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faHandshakeAngle} size='2x'/>
                            <div>Glawbal</div>
                        </div>
                    </Link>
                    
                    <div className="userOptions">
                        <div className='language'>
                            <FontAwesomeIcon icon={faGlobe} size='lg' className='animatedIcon'/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;