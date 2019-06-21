import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: true
    }

    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({toggled:false});
  }
  renderButton() {
    if(this.props.showButton) {
      return (
        <div className="button-container mt-small">
          <button onClick={this.toggleModal} className="button">
            {this.props.buttonText}
          </button>
        </div>
      );
    }
    else {
      return null;
    }
  }
  render() {
    if(this.state.toggled) {
      return (
          <section key="modal" className="card modal column-center">
          <div className="inner-container">
            <div className="head">
              <i onClick={this.toggleModal}
                 className="far fa-times-circle close">
              </i>
            </div>
            <div className="content">
              {this.props.children}
            </div>
            {this.renderButton()}
          </div>
        </section>
      );
    }
    else {
      return null;
    }
  }
}

export default Modal;