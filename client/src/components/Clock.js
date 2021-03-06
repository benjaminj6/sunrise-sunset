import React, { PropTypes } from 'react'
import SliderContainer from '../containers/SliderContainer'
import './Clock.css'

const Clock = ({ remaining, name, waiting }) => {
  const hours = remaining / (1000 * 60 * 60)
  const minutes = (hours % 1) * 60
  const seconds = (minutes % 1) * 60
  const pad = (num) => (`0${Math.floor(num)}`).slice(-2)

  return (
    <div className='time-display'>
      {waiting
        ? <h6>{`Time until ${name}:`}</h6>
        : <h2>{`${name} is happening right now!`}</h2>
      }
      {waiting &&
        <h1>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</h1>
      }
      <SliderContainer />
    </div>
  )
}

const { number, bool, string } = PropTypes

Clock.propTypes = {
  name: string.isRequired,
  remaining: number,
  waiting: bool.isRequired
}

export default Clock
