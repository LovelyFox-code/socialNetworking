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

function App(props) {
 
  return (
    
    <BrowserRouter>
      
      <Header />
        <div className="wrapper">
          
          <Navbar />
          <Route path="/profile" render={ () => <Profile postData={props.postData}/>}  />
          <Route path="/dialogs" render={ () => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />}/>
          <Route path="/settings" render={ () => <Settings />}/>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
