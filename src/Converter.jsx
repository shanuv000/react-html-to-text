import React from "react";
import { convert } from "html-to-text";
import Form from "./Form";

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

  return (
    <>
      <div>{text}</div>
      {/* <div>{props.text}</div> */}
    </>
  );
};
export default Converter;
