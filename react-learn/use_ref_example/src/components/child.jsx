import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered:");

  return (
    <div>
      <p>This is child Component</p>

      <h3>{name}</h3>
    </div>
  );
});

export default Child;