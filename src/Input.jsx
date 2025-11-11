import { useState } from "react";

const Input = ({ handleChange, hint }) => {
  const [cites, setCites] = useState("");
  const filterCity = ()=>{
  
  }
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={handleChange} />
    </div>
  );
};

export default Input;
