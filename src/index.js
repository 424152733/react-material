import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import Root from './app';

const elem = document.getElementById('app')

render(
  <AppContainer>
      <Root />
  </AppContainer>,
   elem
)

//组件热替换
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextRoot = require('./app').default
    render(
      <AppContainer>
          <NextRoot />
      </AppContainer>,
      elem
    )
  })
}