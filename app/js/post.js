import React from 'react'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      param: ""
    }
  }
  componentDidMount() {
    var id = this.props.params.id
    this.setState({param: id})
  }

  render() {
    return (
      <div>
        <p>Parametro: { this.state.param } </p>
      </div>
    )
  }
}