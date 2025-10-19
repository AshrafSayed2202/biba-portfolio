import React from 'react'
import { motion } from 'framer-motion'
const Header = ({ title, classNames }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`text-[56px] font-bold text-center bg-gradient-to-b from-white to-[#41A4C5] bg-clip-text text-transparent ${classNames}`}>
            {title}
        </motion.h1>
    )
}

export default Header