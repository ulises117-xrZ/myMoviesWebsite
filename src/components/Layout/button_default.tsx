import React from 'react'

interface ButtonDefaultProps {
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>)=> void;
}

const ButtonDefault = ({action}: ButtonDefaultProps) => {
    return (
        
            <button onClick={(e)=> action(e)} className='__button__'>
                Submit
            </button>
    )
}

export default ButtonDefault
