import React, { Component } from 'react'
import Die from './Die'
import './RollDices.css'

export default class RollDices extends Component {
  // use default props for an array of options that are never going to change - then this could be overridden to change amount of sides by passing in a new array of options
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)
    this.state = {
      die1: 'one',
      die2: 'two',
      isRolling: false
    }
    this.roll = this.roll.bind(this)
  }
  // on click changes and sets a new state that will rerender the all the components below
  roll() {
    // pick 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    // setState w/ new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true
    })
    setTimeout(() => {
      this.setState({
        isRolling: false
      })
    }, 1000)
  }
  render() {
    return (
      <div className="RollDices">
        <div className="RollDices-container">
          <Die face={this.state.die1} shaking={this.state.isRolling} />
          <Die face={this.state.die2} shaking={this.state.isRolling} />
        </div>

        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Is rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}
