import React from 'react';

const Button = ({children}) => {
    
    // const {children}  = props
    return (
        <div className='text-center mt-4'>
           <button className="btn btn-accent">{children}</button>
        
        </div>
    );
};

export default Button;