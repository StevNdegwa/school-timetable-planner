import React from "react";
import PropTypes from "prop-types";
import {MdClose} from "react-icons/md";

import Modal, {Header, Main, Footer} from "../../../../Modal";
import {Wrapper} from "./styles";

export default function AddRowDialog({children, visible, cancel, save}){
  return (
    <Modal visible={visible} close={cancel}>
      <Wrapper>
        <Header>
          <span></span>
          <span onClick={cancel}><MdClose/></span>
        </Header>
        <Main>
          {children}
        </Main>
        <Footer>
          <span></span>
          <span>
            <button onClick={cancel}>CANCEL</button>
            <button className="primary" onClick={save}>SAVE</button>
          </span>
        </Footer>
      </Wrapper>
    </Modal>
  )
}

AddRowDialog.propTypes = {
  visible:PropTypes.bool.isRequired,
  cancel:PropTypes.func.isRequired
}