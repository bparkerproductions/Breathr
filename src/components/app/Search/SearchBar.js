import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputToggled: true
    }

    this.toggleInput = this.toggleInput.bind(this);
    this.trackInput = this.trackInput.bind(this);
  }
  trackInput(event) {
    this.props.searchCallback(event.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  toggleInput() {
    this.setState({inputToggled: !this.state.inputToggled})
  }
  renderForm() {
    if(this.state.inputToggled) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.trackInput}></input>
        </form>
      )
    }
    else {
      return null;
    }
  }
  render() {
    return (
      <div className="search-input-container">
        <div title="toggle search bar" className="search-icon">
          <i onClick={this.toggleInput} className="fas fa-search"></i>
        </div>
        <div className="search-input">
          {this.renderForm()}
        </div>
      </div>
    )
  }
}

export default SearchBar;