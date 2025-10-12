import React from 'react'

const Header = ({ title, classNames }) => {
    return (
        <h1 className={`text-[56px] font-bold text-center bg-gradient-to-b from-white to-[#41A4C5] bg-clip-text text-transparent ${classNames}`}>
            {title}
        </h1>
    )
}

export default Header