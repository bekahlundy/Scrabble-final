import React from 'react';
import DisplaySection from './DisplaySection'
import scoreWordHelper from './helpers.js/scoreWordHelper'


export default class Application extends React.Component {

  render() {
    return(
      <div>
        <p>{scoreWordHelper('aaa', 3)}</p>
      </div>
    )
  }
}
