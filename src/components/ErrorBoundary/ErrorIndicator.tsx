import React from 'react';
import styles from './ErrorIndicator.module.scss';
import imageError from './error_404.png';

const ErrorIndicator: React.FC = () => (
  <div className={styles.error}>
    <img src={imageError} alt="Error" />
    <span>Something went wrong!</span>
  </div>
);

export default ErrorIndicator;
