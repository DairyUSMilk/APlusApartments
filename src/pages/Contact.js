import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Contact(){
    return (
        <section>
          <h1>Contact</h1>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        </section>
      );
}

export default Contact;