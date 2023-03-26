import React, { useState } from "react";
import NoteContent from "./NoteContent";
import TodoContent from "./TodoContent";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Router>
        <Sidebar />
        <div id="content" className="p-4 p-md-5 pt-5">
          {/* <NoteContent /> */}
          <TodoContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
