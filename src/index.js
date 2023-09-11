import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import ForgotPass from './auth/ForgotPass';
import SignUp from './auth/SignUp';
import ChangePass from './auth/ChangePass';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ForgotPass" element={<ForgotPass />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/ChangePass" element={<ChangePass />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
