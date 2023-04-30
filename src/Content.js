import Img1 from "./avatar-mark-webber.webp"
import Img2 from "./avatar-angela-gray.webp"
import Img3 from "./avatar-jacob-thompson.webp"
import Img4 from "./avatar-rizky-hasanuddin.webp"
import Img5 from "./avatar-kimberly-smith.webp"
import Img6 from "./avatar-nathan-peterson.webp"
import Img7 from "./avatar-anna-kim.webp"
import "./Content.css"
import React from 'react';

function Content({count, onChangeState}){
    // console.log(onChangeState);
    function changeColor(name, point){
        let div = document.querySelector(`.${name}`);
        let poi = document.querySelector(`.${point}`);
                // console.log(div);
        div.style.backgroundColor = "white";
        poi.style.display = "none";
        onChangeState();
    }

    return (
        <div className="content">
            <div className="mark con" onClick={() => {
                changeColor("mark", "one")
            }}>
                <img src={Img1} alt="" />
                <div className="full">
                    <p><span className="name">Mark Webber</span> reacted to your recent post <span className="post">My first tournament today!</span><span className="point one"></span></p>
                    <span className="time">
                        1m ago
                    </span>
                </div>
            </div>
            <div className="angela con" onClick={() => {
                changeColor("angela", "two")
            }}>
                <img src={Img2} alt="" />
                <div className="full">
                    <p><span className="name">Angela Gray</span> followed you<span className="point two"></span></p>
                    <span className="time">
                        5m ago
                    </span>

                </div>
            </div>
            <div className="jacob con" onClick={() => {
                changeColor("jacob", "three")
            }}>
                <img src={Img3} alt="" />
                <div className="full">
                    <p><span className="name">Jacob Thompson</span> has joined your group<span className="group"> Chess Club</span><span className="point three"></span></p>
                    <span className="time">
                        1 day ago
                    </span>

                </div>
            </div>
            <div className="rizky con" onClick={() => {
                changeColor("rizky", "four")
            }}>
                <img src={Img4} alt="" />
                <div className="full">
                    <p><span className="name">Rizki Hasanuddin</span> sent you a private message<span className="point four"></span></p>
                    <div className="msg">
                        <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                        I'm already having lots of fun and improving my game.</p>
                    </div>
                    <span className="time">
                        5 day ago
                    </span>

                </div>
            </div>
            <div className="kimberly con" onClick={() => {
                changeColor("kimberly", "five")
            }}>
                <img src={Img5} alt="" />
                <div className="full">
                    <p><span className="name">Kimberly Smith</span> commented on your picture <span className="post">My first tournament today!</span><span className="point five"></span></p>
                    <span className="time">
                        1 week ago
                    </span>
                </div>
            </div>
            <div className="nathan con" onClick={() => {
                changeColor("nathan", "six")
            }}>
                <img src={Img6} alt="" />
                <div className="full">
                    <p><span className="name">Nathan Peterson</span> reacted to your recent post<span className="post">5 end-game strategies to increase your win rate</span><span className="point six"></span></p>
                    <span className="time">
                        2 weeks ago
                    </span>

                </div>
            </div>
            <div className="anna con" onClick={() => {
                changeColor("anna", "seven")
            }}>
                <img src={Img7} alt="" />
                <div className="full">
                    <p><span className="name">Anna Kim</span> left the group<span className="group"> Chess Club</span><span className="point seven"></span></p>
                    <span className="time">
                        2 weeks ago
                    </span>

                </div>
            </div>
        </div>
      );
}
 
export default Content;