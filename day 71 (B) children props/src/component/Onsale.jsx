import React from "react"

function Onsale({ children }) {
  return (
    <div style={{ position: "relative" }}>
      
      <span
        style={{
          position: "absolute",
          top: "5px",
          left: "5px",
          backgroundColor: "red",
          color: "white",
          padding: "3px 6px",
          fontSize: "12px",
          borderRadius: "4px"
        }}
      >
        SALE
      </span>

      {children}
      
    </div>
  )
}

export default Onsale