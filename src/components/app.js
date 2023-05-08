import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Note heading="Note 1" content="Clean the room" />
      <Note heading="Note 2" content="Go to shopping"/>
      <Note heading="Note 3" content="Wash the car"/>
      <Note heading="Note 4" content="Study math"/>
      {/* Componentin içine className eklenerek style ı düzenlenemez
      componentin style ını düzenlemek için o component kodundaki div'e class name eklenir.
      */}
    </>
  );
}

export default App;
