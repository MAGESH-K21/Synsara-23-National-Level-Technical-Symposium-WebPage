import React from "react";
import "./Button.css";

export default function Button({ children, primary }) {
    return (
        <div>
            <div className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}>{children}</div>
        </div>
    );
}