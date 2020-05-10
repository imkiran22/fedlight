import React from 'react';
import random from 'lodash/random';
export interface Props {
  title: string
}
export const Button: React.FC<Props> = ({title}: Props) => {
    const val = random(10, 1).toString();
    return (
      <button id={val}>{title}</button>
    )
}