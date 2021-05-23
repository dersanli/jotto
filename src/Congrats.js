import React from 'react'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param success
 * @returns {JSX.Element} or null
 */


export default ({ success }) => {
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
