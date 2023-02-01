import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Search() {

  return (
    <div>
        <h1>Search</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </div>
  );
}

export default Search;
