import React, { useContext } from "react";
import "./MainContent.css";
import compass_icon from "../assets/compass_icon.png";
import profile from "../assets/profile.jpg";
import bulb_icon from "../assets/bulb_icon.png";
import message_icon from "../assets/message_icon.png";
import code_icon from "../assets/code_icon.png";
import gallery_icon from "../assets/gallery_icon.png";
import mic_icon from "../assets/mic_icon.png";
import send_icon from "../assets/send_icon.png";
import { Context } from "../context/Context.jsx";
import gemini_icon from "../assets/gemini_icon.png";
const MainContent = () => {
  const {
    onSent,
    recentPrompt,
    loading,
    showResult,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h3>Gemini</h3>
          <img className="profile" src={profile} alt="profile" />
        </div>

        {!showResult ? (
          <div className="whole-center-content">
            <div className="center-content">
              <h1>Hello, I Am Parker's Chat Bot powered by Gemni </h1>
              <h1> </h1>
              <span>From SRMIST</span>
              <span>How can I help you today?</span>
            </div>

            <div className="content-container">
              <div className="input-box-container">
                <p>I am Powered By Gemini AI</p>
                <div>
                  <img src={compass_icon} alt="" />
                </div>
              </div>
              <div className="input-box-container">
                <p> This Project will emphasis CI/CD Deployment of a react app </p>
                <div>
                  <img src={bulb_icon} alt="" />
                </div>
              </div>
              <div className="input-box-container">
                <p>
                I can help you with your queries, just type
                </p>
                <div>
                  <img src={message_icon} alt="" />
                </div>
              </div>

              <div className="input-box-container">
                <p>Tell me about React js and React native</p>
                <div>
                  <img src={code_icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={profile} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="prompt">
          <div className="input-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />

            <div className="input-icon">
              <img src={gallery_icon} alt="" />
              <img src={mic_icon} alt="" />
              <img onClick={() => onSent()} src={send_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="last-para">
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
