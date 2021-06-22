import React from 'react'

const Contact = () => (
    <li>Now seriously, get in touch!
        <ul>
            <li key={1}><a href="https://wa.me/420608984789"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
            <li key={2}><a href="mailito:ekheinquarto@gmail.com"><i className="fas fa-at"></i> Email</a></li>
            <li key={3}><a href="https://instagram.com/ekheinquarto"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li key={4}><a href="https://github.com/ekqt"><i className="fab fa-github"></i> Github</a></li>
        </ul>
    </li>
)

export default Contact
