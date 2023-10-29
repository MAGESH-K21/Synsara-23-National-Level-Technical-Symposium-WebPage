import React, { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/contact.jsx";
import Schedule from "./pages/Schedule/Schedule";
import EventDetails from "./pages/Event-Details/Event-details";
import Pdf from "./pdf.js";
import events from "./events.json";
import TechnicalEvents from "./pages/Events/TechnicalEvents";
import NonTechnicalEvents from "./pages/Events/NonTechnicalEvents";
import homepage from "./static/bgweb.mp4";
import Brochure from "./pages/Event-Details/Brochure";
import homepageMob from "./static/bgweb.gif";
import useIsMobile from "./components/useIsMobile";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2950);
  },[]);
  const dev=useIsMobile();
  return (
    <>
    
      <Router>
      { loading?(
      // <div className="loader-container">
      //   <div className="spinner"></div>
      <div class="flex justify-center items-center" >
      {/* <img
        src="homepage.gif"
        class="max-w-sm h-auto shadow-lg"
        alt=""
      /> */}
      {/* <img src={homepage} class="max-w-full h-full"/> */}
      <div className="loader-container">
        {dev ? (<img src={homepageMob} class="max-2-full h-full" alt="loader-mobile"/>) :
        (<img src={homepage} class="max-w-full h-full" alt="loader-desktop"/>)}
      </div>
      </div>
):(
        <div className="body">
        
          <Switch>
          
            <Route path="/" exact component={Home}  />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/pdf" component={Pdf} />
            <Route path="/non-technical" component={NonTechnicalEvents} />
            <Route path="/technical" component={TechnicalEvents} />
            {events.map((event) => (
              <Route path={`/${event.eventId}`} key={event.eventId}>
                <EventDetails eventDetail={event} />
              </Route>
            ))}
            {
              events.map((event) => (
                <Route path={`/${event.eventId}Brochure`}>
                  <Brochure eventDetail={event} />
                </Route>
              ))
            }
            <Redirect path="*" to="/" />
            
          </Switch>
          
        </div>
)};
        {/* <Particles
  params={{
    particles: {
      number: {
        value: 50, // Increase the number of particles
      },
      size: {
        value: 3, // Decrease the size of particles
      },
      color: {
        value: "#3498db", // Change the particle color
      },
      line_linked: {
        enable: true,
        distance: 150, // Increase the distance between connected particles
        color: "#3498db", // Change the color of connections
        opacity: 0.5,
        width: 2,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Change interaction mode to "repulse"
        },
      },
    },
  }}
  style={{
    top: 0,
    left: 0,
    zIndex: -100,
    height: "100%",
    width: "100%",
    position: "fixed",
  }}
/> */}
{/* <Particles
  params={{
    particles: {
      number: {
        value: 50, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#3498db", // Color of particle border
        },
        polygon: {
          nb_sides: 5,
        },
      },
      size: {
        value: 5,
        random: true,
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  }}
  style={{
    top: 0,
    left: 0,
    zIndex: -100,
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#000", // Background color for the particle container
  }}
/> */}
<Particles
  params={{
    particles: {
      number: {
        value: 50, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle", // You can use other shapes like "square", "triangle", or "star"
      },
      size: {
        value: 5,
        random: true,
      },
      color: {
        value: "#3784bc", // Color of the particles
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  }}
  style={{
    top: 0,
    left: 0,
    zIndex: -100,
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#f0f0f0", // Background color for the particle container
  }}
/>


      {/* <Particles
  params={{
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "image",
        image: {
          src: "path_to_music_note_image.png", // Replace with the path to your music note image
          width: 100,
          height: 100,
        },
      },
      size: {
        value: 30,
        random: true,
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  }}
  style={{
    top: 0,
    left: 0,
    zIndex: -100,
    height: "100%",
    width: "100%",
    position: "fixed",
  }}
/> */}


        {/* <Particles
         params={{
            "particles":{
               "number":{
               "value":35
            }, 
            "size":{
               "value":5
            },
            "color":{
               "value":"#e90432"
            }
         },
         "interactivity":{
            "events":{
               "onhover":{
                  "enable":true,
                  "node":"repulse"
               }     
             }
         },
         }} 
         style={{
            top: 0,
            left: 0,
            zIndex: -100,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
         />
         */}
      </Router>

    </>
  );
}

export default App;
