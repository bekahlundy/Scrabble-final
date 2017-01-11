import React from 'react';
import Input from './Input'
import DisplaySection from './DisplaySection'
import scoreWordHelper from './helpers.js/scoreWordHelper'

export default class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      wordDraft: '',
      word: '',
      numberDraft: '',
      number: '',
    }
  }

  grabWord(e) {
    this.setState({ wordDraft: e.target.value})
  }

  grabNumber(e) {
    this.setState({ numberDraft: e.target.value})
  }

  submit(num) {
    this.setState({ word: this.state.wordDraft })
    this.setState({ number: this.state.numberDraft })
    let setWord = this.state.wordDraft
    let setNum = this.state.numberDraft
    scoreWordHelper(setWord, setNum)
  }

  render() {
    return(
      <div>
        <Input
        className='input-word'
        placeholder='enter a word'
        onChange={this.grabWord.bind(this)}
        />
        <Input
          className='input-multiplier'
          placeholder='enter a multiplier'
          onChange={this.grabNumber.bind(this)}
        />
        <button
          className='sumbit-button'
          onClick={this.submit.bind(this)}>Submit</button>
      </div>
    )
  }
}
