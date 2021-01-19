import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearOption}
        contentLabel="Selected Content"
    >
        <h3> Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearOption}>all right!</button>
    </Modal>
)
export default OptionModal