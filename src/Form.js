import React, { useState } from "react";
import Converter from "./Converter";
const Form = () => {
  const [data, setData] = useState("");
  console.log(data);
  return (
    <>
      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea
          class="form-control"
          aria-label="With textarea"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      </div>
      <Converter text={data} />
    </>
  );
};
export default Form;
