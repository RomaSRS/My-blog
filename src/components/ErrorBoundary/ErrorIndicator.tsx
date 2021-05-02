import React from 'react';

import styles from './ErrorIndicator.module.scss';
import image404 from './error_404.png';

const ErrorIndicator: React.FC = () => (
  <div className={styles.error}>
    <img src={image404} alt="Error" />
    <span>Something went wrong!</span>
  </div>
);

export default ErrorIndicator;
