import React from 'react';
import ReactDOM from 'react-dom/client';
//import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let reRenger = (state,addPost,currentPost,addMessange,newMessage) => { 
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} currentPost={currentPost} addMessange={addMessange} newMessage={newMessage}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}