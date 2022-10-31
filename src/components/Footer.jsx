import React from 'react'
import {FaDice} from "react-icons/fa"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 text-white-content footer-center">
        <FaDice className='text-5xl' />
        <p>Copyright &copy; {footerYear} - Reserved</p>
    </footer>
  )
}

export default Footer