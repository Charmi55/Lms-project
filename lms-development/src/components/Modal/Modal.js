import React from 'react';

import { Modal } from '../BootstrapWrap'

import PrimaryButton from '../Button/PrimaryButton'
import SecondayButton from '../Button/SecondayButton'

const ModalWrap = ({ title, lgShow, setLgShow, children, sumbitCourse, editSubmitCourse, isCreate }) => {
  const userClick = () => {
    sumbitCourse();
  }

  return <Modal
    size="lg"
    show={lgShow}
    onHide={() => setLgShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <PrimaryButton text="Submit" onClick={isCreate ? userClick : editSubmitCourse} />
      <SecondayButton text="Close" onClick={() => setLgShow(false)} />
    </Modal.Footer>
  </Modal>
}

export default ModalWrap;