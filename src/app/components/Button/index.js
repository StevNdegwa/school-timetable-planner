import React from "react";

const Button = React.forwardRef(({icon, className, children, style, type, onClick}, ref) => (
  <button className={className} ref={ref} type={type} onClick={onClick}
    style={{
      display:"flex",
      ...style
    }}
  >
    <div style={{width:"40px", height:"100%", borderRight:"1px solid #bdbdbd"}}>{icon}</div>
    <div style={{width:"100%",padding:"0 0.5em"}}>{children}</div>
  </button>))

export default Button;