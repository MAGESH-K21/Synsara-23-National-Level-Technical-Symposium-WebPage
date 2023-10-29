import React from "react";
import "./pdf.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";
export default function Instructions() {
    return (
        <>
        <Nav/>
        <div className="back-arrow1">
                <Link to="/home">
                <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/0d6efd/circled-left-2.png" alt="circled-left-2"/><span>Back</span>
                </Link>
                
        </div>
        <div>
            <h2 className="title">REACH US</h2>
            <div className="table_container">
                <table className="schedule_table"><>
                <p className='lg:w-full text-white pl-4 pr-8 lg:pr-12 lg:pl-8  text-justify text-xs sm:text-sm md:text-sm lg:text-[20px] sm:p-8 sm:leading-10'>
                We have buses operating from Tambaram.<br></br><br></br>Participants can use these buses to reach our college. The timings will be updated shortly.
                </p></></table>
            </div>
        </div>
        <div>
            <h2 className="title">INSTRUCTIONS</h2>
            <div className="table_container">
                <table className="schedule_table"><>
                <p className='lg:w-full text-white pl-4 pr-8 lg:pr-12 lg:pl-8  text-justify text-xs sm:text-sm md:text-sm lg:text-[20px] sm:p-8'>
                1. Students must carry their college ID card on the day of the event.<br></br><br></br>
                2. Buses will only operate from Tambaram. For more details regarding the bus facilities, contact the coordinators.<br></br><br></br>
                3. All students must come in formal attire.<br></br>
                </p></></table>
            </div>
        </div>
        <Footer/>
        </>
    );
}