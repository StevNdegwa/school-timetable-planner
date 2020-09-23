import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";

import {Wrapper} from "./styles";

export default function Modal({children, visible, close}){
  return ReactDom.createPortal(
    <Wrapper className="level-400" visible={visible}>
      <div className="space level-500" onClick={()=>close()}></div>
      <CSSTransition in={visible} classNames="pop" timeout={200}>
        <span className="content level-600">
          {children}
        </span>
      </CSSTransition>
    </Wrapper>,
    document.getElementById("root")
  )
}

Modal.propTypes = {
  visible:PropTypes.bool.isRequired,
  close:PropTypes.func.isRequired
}