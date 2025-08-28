import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <img
        src="https://miro.medium.com/0*QOZm9X5er1Y0r5-t"
        alt="Page not found"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // fills without distortion
        }}
      />
    </div>
  );
};

export default PageNotFound;
