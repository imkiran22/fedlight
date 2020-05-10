import React from 'react';
import random from 'lodash/random';
export interface Props {
  title: string;
  className: string;
}
export const Button: React.FC<Props> = ({ title, className}: Props) => {
    const val = random(5, 1).toString();
    return (
      <button id={val} className={className}>{title}</button>
    )
}