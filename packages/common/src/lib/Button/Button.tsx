import React from 'react';
import random from 'lodash/random';
export interface Props {
  title: string;
  className: string;
}
export const Button: React.FC<Props> = ({ title, className}: Props) => {
    const val = random(1000, 1).toString();
    return (
      <button data-test-id={val} id={val} className={className}>{title}</button>
    )
}