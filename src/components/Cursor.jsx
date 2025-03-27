import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 0, 0"
        outerAlpha={1}
        innerScale={1.2}
        outerScale={3}
        trailingSpeed={5}
        clickables={["a", "button", ".custom-hover"]}
        outerStyle={{
          border: "2px solid rgba(255, 0, 0, 1)",
          backgroundColor: "transparent",
          mixBlendMode: "normal",
          zIndex: "9999" // Add this line
        }}
        innerStyle={{
          backgroundColor: "rgba(255, 0, 0, 1)",
          zIndex: "9999" // Add this line
        }}
      />
    </div>
  );
};

export default Cursor;