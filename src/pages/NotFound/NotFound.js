import React from 'eact';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;