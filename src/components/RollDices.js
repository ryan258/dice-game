import React, { Component } from 'react'
import Die from './Die'

export default class RollDices extends Component {
  // use default props for an array of options that are never going to change - then this could be overridden to change amount of sides by passing in a new array of options
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)
    this.state = {
      die1: 'one',
      die2: 'two'
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
      die2: newDie2
    })
  }
  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />

        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}
