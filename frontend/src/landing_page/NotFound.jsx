import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div className="container mt-5 " style={{margin:"0 10%"}}>
            <p className='mb-2'>404</p>
            <h2> Page not found</h2>
            <p>We couldn’t find the page you were looking for. <br />
            Visit <Link to ="/" style={{textDecoration:"none"}}>Zerodha’s home page</Link>
            </p>
        </div>
     );
}

export default NotFound;