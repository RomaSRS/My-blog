import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss';

interface ILinkButtonProps {
  to: string;
  classname?: string[];
}

const LinkButton: React.FC<ILinkButtonProps> = ({ to, classname = [], children }) => (
  <Link to={to} className={cn('hover', styles.linkButton, ...classname.map((el) => styles[el]))}>
    {children}
  </Link>
);

export default LinkButton;
