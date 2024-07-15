import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'


function Contacts() {
    return (
        <>
            <div>
                <Navbar />

                <div className=' md:min-h-screen'>
                    <Contact/>
                </div>

                <Footer/>
            </div>

        </>
    )
}

export default Contacts