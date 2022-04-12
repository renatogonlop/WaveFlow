import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <React.Fragment>
      Page not found. Goto <Link to="/home">Home Page</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;