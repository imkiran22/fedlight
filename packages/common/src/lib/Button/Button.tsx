import React from 'react';
import random from 'lodash/random';
export interface Props {
  title: string;
  className: string;
}
export const Button: React.FC<Props> = ({ title, className}: Props) => {
    const val = random(1000, 1).toString();
    const randomVal = random(100, 1).toString();
    return (
      <button data-test-id={randomVal} id={val} className={className}>{title}</button>
    )
}