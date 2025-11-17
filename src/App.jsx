import ComingSoon from "./pages/ComingSoon";
import React, { useEffect } from "react";

function App() {
  //   useEffect(() => {
  //   const cursor = document.getElementById("custom-cursor");

  //   const moveCursor = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //   };

  //   window.addEventListener("mousemove", moveCursor);

  //   return () => window.removeEventListener("mousemove", moveCursor);
  // }, []);
  return (
    <>
    {/* Custom Cursor */}
      {/* <div id="custom-cursor" className="custom-cursor"></div> */}
      <ComingSoon />
    </>
  );
}

export default App;
