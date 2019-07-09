import React, { useState } from 'react';

export const Modal = (props) => {
  const [toggled, setToggled] = useState(true);

  function toggleModal() {
    setToggled(false);
  }
  function renderButton() {
    if(props.showButton) {
      return (
        <div className="button-container mt-small">
          <button onClick={toggleModal} className="button">
            {props.buttonText}
          </button>
        </div>
      );
    }
    else return null;
  }
  function renderCloseButton() {
    if(props.showClose) {
      return (
        <i onClick={toggleModal}
          className="far fa-times-circle close">
        </i>
      )
    }
    else return null;
  }
  function getModalClassNames() {
    return toggled ? 'modal column-center' : 'modal column-center hidden';
  }

  //setToggled({toggled: true});
  return (
    <section key="modal" className={getModalClassNames()}>
      <div className="inner-container">
        <div className="head">
          {renderCloseButton()}
        </div>
        <div className="content">
          {props.children}
        </div>
        {renderButton()}
      </div>
    </section>
  );
}

export default Modal;