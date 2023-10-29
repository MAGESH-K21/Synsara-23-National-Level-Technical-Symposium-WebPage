import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import SynsaraLogo from "../../static/synsara-logo.png";
import SynsaraLogo1 from "../../static/SYNSARA WEBSITE TEXT.png";
import TimeDisplay from "./TimeDisplay";
import "./Home_main.css";
import "./Home_main2.css";
import Bg from "./Bg.png";
import { Media } from "reactstrap";
import Bgweb from '../../static/webbg.gif'
import Bgwebmob from "../../static/webbgmb.gif"
import Nav from "../../components/Nav/Nav";
import useIsMobile from "../../components/useIsMobile";

const Home_main = () => {
  const countDownDate = new Date("01 November, 2023").getTime()+(3600*1000*10); 
  const dev=useIsMobile();

  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      transition: 0.5,
      opacity: 1,
    },
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now > 0 ? countDownDate - now : 0;
      setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div style={{backgroundImage: `url(${dev ? Bgwebmob : Bgweb})`,backgroundSize: 'contain',margin:'0px',backgroundRepeat:'no-repeat'}}>
    <Nav/>
      <div
        className="text-white text-center p-2 p-md-0 h-screen"
        style={{
          margin: "0px auto 0px auto",
          maxWidth: "450px",
          //display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 420,
          //overflow: "hidden",
        }}
      >

        <div
          style={{ zIndex: 10 }}
          variants={animationVariants}
          //initial="hidden"
          animate="visible"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          
          <div
            style={{
              // fontSize:
              //   "calc(16px + (14 - 12) * ((100vw - 300px) / (1600 - 300)))",
              // textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              // fontWeight: "600",

                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "200",
               fontFamily:  "Audiowide-Regular",
              //fontFamily:"Quantico-Regular",
              color: "white",
            }}
          >
            {dev ? <h6>Department of Computer Science <br/> and Engineering <br/> Proudly Presents</h6> : <h6>Department of Computer Science and Engineering <br/> Proudly Presents</h6>}
            
          </div>
          <br/>
          {/* <img 
            style={{ margin: "auto", maxWidth: "80%", height: "auto",}}
            src={SynsaraLogo1}
            alt="logo"
          /> */}
          <div className="container mt-[340px]">
            <div className="row text-center">
              <div className="col-3">
                <TimeDisplay dataNumber={days} timeFormat={"Days"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={hours} timeFormat={"Hours"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={minutes} timeFormat={"Minutes"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={seconds} timeFormat={"Seconds"} />
              </div>
            </div>
          </div>


          <p
            className="text-left" id="typed-out"
            style={{
              fontSize:
                "calc(25.5px + (15 - 13) * ((100vw - 300px) / (1600 - 300)))",
              textAlign: "justify",
              // 
          
            }}
          >
             </p> 
          
            <br/>
            <div className="container">
            <div className="row">
            <strong style={{ marginTop:"10px", fontSize: "15px", color: "white", textAlign:"center", fontFamily:  "Audiowide-Regular",}}>TUNE IN AND SIGN UP !</strong><br/>
            <div className="col-13">
            <strong className="boxStyle">01-11-2023{' '}-{' '}02-11-2023</strong>
            </div> 
            </div> 
            </div>
        
          <br/>

          <div className="container">
            <div className="row">
              <div className="col-13">
                <Link to="/events">
                  <br/>
                  <Button primary><b>REGISTER</b></Button>
                </Link>
              </div> 
            </div>
          </div>  
        </div>
        <img
          style={{
            opacity: 0.4,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          alt=""
        />
      </div>
      </div>
    </>
  );
};

export default Home_main;