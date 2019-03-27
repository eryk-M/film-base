import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";
import Video from "../../assets/videos/marvel.mp4";
const Modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          transform: props.show
            ? "translate(0, 0) scale(1)"
            : "translate(-100%, -100%) scale(0)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <div className="modal__video-bgc">
          <video className="modal__video" autoPlay={true} loop muted={true}>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <button className="modal__closed" onClick={props.modalClosed}>
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
