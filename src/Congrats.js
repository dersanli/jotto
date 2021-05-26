import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param success
 * @returns {JSX.Element} or null
 */


const Congrats = ({ success }) => {
  if (success) {
    return (<div data-test={'component-congrats'}>
        <span data-test={'congrats-message'}>
          Congratulations!
        </span>
    </div>)
  } else {
    return (<div data-test={'component-congrats'}>
    </div>)
  }

}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
