import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux'
// import { inc, dec } from '../actions/counter_action';
import { counterInc, counterDec } from '../constants/action-type'
@connect(
  ({ counter }) => ({
    counter: counter.count
  }),
  dispatch => ({
    actions: bindActionCreators({ counterInc, counterDec }, dispatch)
  })
)

export default class StartPage extends Component {

  render() {
    const { counter } = this.props;
    const { counterInc, counterDec } = this.props.actions
    return (
        <div>
          <h1>计算器</h1>
          <button onClick={counterInc.bind(this)}> + </button>
          <span>{counter}</span>
          <button onClick={counterDec.bind(this)}> - </button>
        </div>
    )
  }
}
