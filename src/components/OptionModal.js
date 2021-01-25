import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearOption}
        contentLabel="Selected Content"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title"> Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearOption}>all right!</button>
    </Modal>
)
export default OptionModal