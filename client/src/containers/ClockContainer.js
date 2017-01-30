import { connect } from 'react-redux'

import Clock from '../components/Clock'
import { isDay } from '../Utils'

import { incNow } from '../actions/updateNowActions'
import { getTimeLeft } from '../actions/timeLeftActions'

const mapStateToProps = (state, ownProps) => {
  const { sunriseSunsetData: times } = state
  const { now, isLoading, loadSuccess, timeLeft } = times

  const day = isDay(times)

  return {
    day,
    timeLeft,
    now,
    isLoading,
    loadSuccess,
    times
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (times) => {
      window.setTimeout(() => {
        dispatch(incNow(times))
      }, 1000)
    },
    getTimeLeft: (times) => {
      dispatch(getTimeLeft(times))
    }
  }
}

const ClockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

export default ClockContainer
