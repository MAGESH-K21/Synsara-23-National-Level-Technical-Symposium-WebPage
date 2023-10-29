import React, { useState } from "react";
import "./Events.css";
import events from "../../events.json";
import {Link} from "react-router-dom";
import EventCard from "./EventCard";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import useIsMobile from "../../components/useIsMobile";
export default function Events() {
  const [currentTab, setCurrentTab] = useState(0);
    const isMobile = useIsMobile();
  return (
    <div>
        <Nav/>
        <div className="back-arrow1">
                <Link to="/home">
                <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/0d6efd/circled-left-2.png" alt="circled-left-2"/><span>Back</span>
                </Link>
                
        </div>
    <div className="wrapper">
      {events.filter((event) => event.eventType === "main")
      .map((event) => (
        <Link to={`/${event.eventUrl}`}>
      <div className="card">
        <div className="card__body">
          <img src={event.eventImage} class="card__image" alt="card-image"/>
          <h2 className="card__title">{event.eventTitle}</h2>
        </div>
        <button className="card__btn"><span>View Events</span></button>
      </div>
    </Link>
      ))}
    </div>
    <Footer/>
    </div>
  );
}