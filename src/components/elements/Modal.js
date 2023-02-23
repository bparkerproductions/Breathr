import React, { useState } from 'react'

const Modal = props => {
  const [toggled, setToggled] = useState(true)

  function toggleModal() {
    setToggled(false)
  }

  function renderButton() {
    if (props.showButton) {
      return (
        <div className="modal__button-container">
          <button onClick={toggleModal} className="button">
            { props.buttonText }
          </button>
        </div>
      )
    }
    else return null
  }

  function renderCloseButton() {
    if (props.showClose) {
      return (
        <i onClick={toggleModal}
           className="far fa-times-circle close">
        </i>
      )
    }
    else return null
  }
  
  function isModalHidden() {
    return toggled && props.closedFromOuter ? '' : 'hidden '
  }

  return (
    <section className={`modal-container column-center mobile-fixed ${isModalHidden()}`}>
      <div className="container">
        <div className="modal">
          <div className="modal__head d-flex justify-content-end">
            {renderCloseButton()}
          </div>
          <div className={`modal__content ${props.contentClasses}`}>
            { props.children }
          </div>
          {renderButton()}
        </div>
      </div>
    </section>
  )
}

export default Modal