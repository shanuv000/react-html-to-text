import React, { useState } from "react";
import Converter from "./Converter";
import clipboard from "clipboardy";

const Form = () => {
  const [data, setData] = useState("");
  console.log(data);
  // const copyText = clipboard.write(data);
  const clearForm = () => {
    const contentToPaste = clipboard.read();
    setData("");
    // console.log(contentToPaste);
    setData(contentToPaste);
  };
  return (
    <>
      <div className="row align-items-center">
        <div className="col">
          <div class="input-group mt-2 mb-2 p-1 gutter form-floating">
            {/* <span class="input-group-text">Html Code</span> */}
            <textarea
              class="form-control"
              // aria-label="With textarea"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            {/* <p onClick={() => copyText}>Copy text</p> */}
            <label for="floatingTextarea">Html Codes Here</label>
          </div>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => clearForm()}
          >
            Clear
          </button>
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
