import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputToggled: true
    }

    this.toggleInput = this.toggleInput.bind(this);
  }
  trackInput(event) {
    console.log(event.target.value);
  }
  toggleInput() {
    this.setState({inputToggled: !this.state.inputToggled})
  }
  renderForm() {
    if(this.state.inputToggled) {
      return (
        <form>
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
        <div className="search-icon">
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