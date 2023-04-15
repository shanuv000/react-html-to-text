import React from "react";
import { convert } from "html-to-text";
import Form from "./Form";
import clipboard from "clipboardy";
const Converter = (props) => {
  const options = {
    // wordwrap: 130,
    // ...
  };
  // const html = "<div>Hello World</div>";

  const html = `${props.text}`;
  console.log(html);
  const text = convert(html, options);

  console.log(text);
  // console.log(text); // Hello World
  const copyText = clipboard.write(text);

  return (
    <>
      <div
        className="badge bg-primary text-wrap fs-2 fw-semibold"
        // style={{ width: "10rem" }}
        onClick={() => copyText}
      >
        {text}
      </div>

      {/* <div>{props.text}</div> */}
    </>
  );
};
export default Converter;
