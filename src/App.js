import React, { Component } from 'react'
import Select from 'react-select'

export default class App extends Component {
  state = {
    options: [
      { value: 'chocolate', label: 'Chocolate', id: "1" },
      { value: 'strawberry', label: 'Strawberry', id: "2" },
      { value: 'vanilla', label: 'Vanilla', id: "3" }
    ],

    id: '',
    name: ''

  }

  onchangeHandler = (e) => {
    console.log("e", e)
    this.setState({
      id: e.id,
      name: e.value
    })


  }

  render() {
    console.log("state", this.state)
    return (
      <div>
        <Select options={this.state.options} onChange={this.onchangeHandler} />
      </div>
    )
  }
}
