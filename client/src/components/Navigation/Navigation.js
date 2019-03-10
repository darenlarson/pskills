import React from 'react';
import {Link} from 'react-router-dom';
import {} from 'reactstrap';

const Navigation = () => {
    return (
      <div className="MainNav">
        <Link  to="/">
          FIND WORKERS
        </Link>
        <Link  to="/admin/">
          ADMIN LOGIN
        </Link>
        <Link  to="/help/">
          CONTACT US / HELP
        </Link>
      </div>
    );
  };

  export default Navigation;