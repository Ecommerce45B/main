// import { Send } from "@mui/icons-material";
import { LuSendHorizonal } from "react-icons/lu";
import React from 'react';
import './Newsletters.scss'

const Newsletter = () => {
  return (
    <div className="container">
      <h1 className="title">Newsletter</h1>
      <div className="desc">Get timely updates from your favorite products.</div>
      <div className="inputContainer">
        <input className="input" placeholder="Your email" />
        <button className="button">
            <LuSendHorizonal />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
