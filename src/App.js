import React from "react";
import TopBar from "./components/topbar/TopBar";
// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./components/posts/login/Login";
import Register from "./components/posts/register/Register";
function App() {
  return (
    <div className="App">
      <>
        <TopBar />
        <Register />
      </>
    </div>
  );
}

export default App;
