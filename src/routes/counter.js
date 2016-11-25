import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux'
import { inc, dec } from '../actions/counter_action';

@connect(
  ({ counter }) => ({
    counter: counter.count
  }),
  dispatch => ({
    actions: bindActionCreators({ inc, dec }, dispatch)
  })
)

export default class StartPage extends Component {

  render() {
    const { counter } = this.props;
    const { inc, dec } = this.props.actions
    return (
        <div>
          <h1>计算器</h1>
          <button onClick={inc.bind(this)}> + </button>
          <span>{counter}</span>
          <button onClick={dec.bind(this)}> - </button>
        </div>
    )
  }
}
