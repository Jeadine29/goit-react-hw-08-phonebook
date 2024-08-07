import React from "react";
import Avatar from "react-avatar";

function Avatars() {
  
  return (
    <Avatar
      name="John Doe" 
      size="100" 
      round={true} 
      textSizeRatio={2} 
      style={{ width: "100px", height: "100px" }}
    />
  );
}

export default Avatars;
