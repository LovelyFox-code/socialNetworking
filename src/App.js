import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setting";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
        <div className="wrapper">
          
          <Navbar />
          <Route path="/profile" render={ () => <Profile />} component={Profile} />
          <Route path="/dialogs" render={ () => <Dialogs />}component={Dialogs} />
          <Route path="/news" render={ () => <News />}component={News} />
          <Route path="/music" render={ () => <Music />}component={Music} />
          <Route path="/settings" render={ () => <Settings />}component={Settings} />
        </div>
      
    </BrowserRouter>
  );
}

export default App;
