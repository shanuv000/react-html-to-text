import React, { useState } from "react";
import Converter from "./Converter";
// import clipboard from "clipboardy";

const Form = () => {
  const [data, setData] = useState("");
  console.log(data);
  // const copyText = clipboard.write(data);

  return (
    <>
      <div className="row align-items-center">
        <div className="col">
          <div class="input-group mb-3 form-floating">
            {/* <span class="input-group-text">Html Code</span> */}
            <textarea
              class="form-control"
              // aria-label="With textarea"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            {/* <p onClick={() => copyText}>Copy text</p> */}
            <label for="floatingTextarea">Comments</label>
          </div>
        </div>
        <div class="d-flex" style={{ height: "50px" }}>
          <div class="vr"></div>
        </div>
        <div className="col text-center  bg-body-tertiary">
          <Converter text={data} />
        </div>
      </div>
    </>
  );
};
export default Form;
