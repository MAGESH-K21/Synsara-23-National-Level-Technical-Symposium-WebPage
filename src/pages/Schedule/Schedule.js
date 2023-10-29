import React from "react";
import "./Schedule.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
export default function Schedule() {
    return (
        <>
        <Nav/>
        <div className="back-arrow1">
                <Link to="/home">
                <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/0d6efd/circled-left-2.png" alt="circled-left-2"/><span>Back</span>
                </Link>
                
        </div>
        <div>
            <h2 className="title">SCHEDULE</h2>
            <h5 className="sub-title">Participants, We kindly request that you follow the event schedule like a well-composed symphony to avoid any event overlaps.</h5>
            <div className="table_container">
                <table className="schedule_table">
                    <tr>
                        <th>Event</th>
                        <th>Round</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="5" className="row_1">
                        BLANK SPACE
                        </td>
                        <td>ROUND 1 (2/11/2023)</td>
                        <td>10:00 AM - 10:25 AM</td>
                    </tr>
                    <tr>
                        <td>Bonus Round (2/11/2023)</td>
                        <td>10:25 AM - 10:35  AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (2/11/2023)</td>
                        <td>10:25 AM - 10:35 AM</td>
                    </tr>
                    <tr>
                        <td>Bonus Round (2/11/2023)</td>
                        <td>11:30 AM - 11.55 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3 (2/11/2023)</td>
                        <td>11:55 AM - 12:30 PM</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan="3" className="row_1">
                        YOU & I
                        </td>
                        <td>ROUND 1 (ONLINE)(31/10/2023)</td>
                        <td>6:30 PM - 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (2/11/2023)</td>
                        <td>9:30 AM - 10:15 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3 (2/11/2023)</td>
                        <td>10:40 AM - 12:00 PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">I KNEW YOU WERE TROUBLE</td>
                        <td>ROUND 1 (2/11/2023)</td>
                        <td> 9:35 AM - 10:25 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (2/11/2023)</td>
                        <td>10:40 AM - 12:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                        CODER-VERSE
                        </td>
                        <td>ROUND 1 (31/10/2023) (ONLINE) </td>
                        <td>7:00 PM - 8 PM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2(2/11/2023)</td>
                        <td>9:25 AM - 12:25 PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                        HUSTLERS HARMONY
                        </td>
                        <td>ROUND 1 (PPT Submission) </td>
                        <td>Before </td>
                    </tr>
                    <tr>
                        <td>ROUND 2(2/11/2023)</td>
                        <td>9:30 AM </td>
                    </tr>
                    <tr>
                        <th colSpan="3">Non Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                        ADS DON'T LIE
                        </td>
                        <td>ROUND 1 (02/11/2023)</td>
                        <td>
                        10:00 AM-11.30 AM
                        </td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (02/11/2023)</td>
                        <td>11.45 AM-12.10  PM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3 (02/11/2023)</td>
                        <td>12.35 AM-1:25 PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                        TRIVIA FIESTA
                        </td>
                        <td>ROUND 1 (02/11/2023)</td>
                        <td> 9:30 AM - 10:05 AM </td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (02/11/2023)</td>
                        <td>10:30 AM - 11:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3 (02/11/2023)</td>
                        <td>11:20 AM - 11:45 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                        ALAIPADUTHEY
                        </td>
                        <td>ROUND 1 (02/11/2023)</td>
                        <td>9:30  AM - 10:40  AM </td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (02/11/2023)</td>
                        <td>11:00  AM - 12:30  PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="1" className="row_1">
                            GAMING (VALORANT)
                        </td>
                        <td>Round 1(ONLINE)(01/11/2023)</td>
                        <td>will be intimated soon</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan="2" className="row_1">
                        THE KNIGHT CHANGES
                        </td>
                        <td>ROUND 1(ONLINE) (31/10/2023)</td>
                        <td>6:30 PM onwards</td>
                    </tr>
                    <tr>
                        <td>ROUND 2 (02/11/2023)</td>
                        <td>9:30 AM  onwards</td>
                    </tr>
                    
                    <tr>
                        <th colSpan="3">Hackathon</th>
                    </tr>
                    <tr>
                        <td className="row_1">CODE ME LIKE YOU DO</td>
                        <td>Round 1 (01/11/2023)</td>
                        <td>9:30 AM - 3:30 PM</td>
                    </tr>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
}
