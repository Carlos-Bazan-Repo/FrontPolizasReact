import React from "react";

export default function Page({ children }) {
    return (

      <main style={{ minHeight: "85vh", backgroundColor: "#D2F7FF", padding: '30px'  }}>

        {children}
      </main>
    
    );
}