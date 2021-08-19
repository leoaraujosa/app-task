import React from 'react';

import '../styles/Button.css';

const Button = ({children, onClick, disabled}) => {
    return ( 
        <button onClick={onClick} disabled={disabled} className="button">
            {children}
        </button>
     );
}
 
export default Button;