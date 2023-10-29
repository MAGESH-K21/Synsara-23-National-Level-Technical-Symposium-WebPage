import "./EventCard.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function EventCard({ name, url, imgUrl, tagline }) {
    return (
            <div className="card_div box col col-6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <Link to={url}>
                    <img className="card_image" src={imgUrl} alt="event" />
                    <div className="card_content">
                        <div className="card_title">{name}</div>
                        <div className="card_desc">{tagline}</div>
                    </div>
                </Link>
            </div> 
    );
}