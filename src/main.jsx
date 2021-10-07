import React from 'react'
import ReactDOM from 'react-dom'
import { styled } from '@linaria/react';
import image from './logo.svg';

const TestBroken = styled('div')`
  background: url(${image}) center center no-repeat;
  width: 120px;
  height: 120px;
  border: 2px solid red;
`;

const TestWorking = styled('div')`
  background: ${() => `url(${image})`} center center no-repeat;
  width: 120px;
  height: 120px;
  border: 2px solid green;
`;

ReactDOM.render(
  <>
    <TestBroken />
    <TestWorking />
  </>,
  document.getElementById('root')
)
