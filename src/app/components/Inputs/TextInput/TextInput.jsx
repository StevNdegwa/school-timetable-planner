import React from "react";
import PropTypes from "prop-types";
import {Wrapper} from "./styles";

export default function TextInput({label, onChange}){
  const handleInputChange = (evt)=>onChange(evt.target.value);
  
  return (<Wrapper>
      <div>{label} :</div>
      <input type="text" onChange={handleInputChange} placeholder={`Type the ${label}...`}/>
    </Wrapper>
  );
}


TextInput.propTypes = {
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func
}