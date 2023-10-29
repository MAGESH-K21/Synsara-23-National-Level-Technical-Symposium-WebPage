import React from "react";


const TimeDisplay = ({ dataNumber, timeFormat }) => {
    return (
        <>
            <div
                className="text-dark"
                style={{
                    borderRadius: "10px",
                    background: "linear-gradient(110deg, rgba(248, 242, 241, 1) 35%, rgba(224, 216, 209, 1) 65%, rgba(120, 117, 104, 1) 100%)",
                    fontWeight: 700,
                    fontSize: "18px",
                    border: "1px solid",
                    boxSizing: "border-box",
                    boxShadow: "-2px 2px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <div>{dataNumber}</div>
                <div
                    style={{
                        borderRadius: "6px",
                        background: "linear-gradient(100deg, rgba(248, 242, 241, 1) 35%, rgba(224, 216, 209, 1) 65%, rgba(120, 117, 104, 1) 100%)",
                        fontSize: "calc(10px + (13 - 10) * ((100vw - 300px) / (1600 - 300)))",
                        boxShadow: "-1px 1px 2px rgba(0, 0, 0, 0.25)"
                    }}
                >
                    {timeFormat}
                </div>
            </div>
        </>
    );
};

export default TimeDisplay;
