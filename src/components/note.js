import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 className="heading"> {props.heading}  </h1>
      <p>
        {props.content}
      </p>
    </div>
  );
}

export default Note;
