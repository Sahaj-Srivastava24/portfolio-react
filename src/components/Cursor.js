import React, { useState, useContext, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import { CursorContext } from "./CursorContextProvider";
const Cursor = () => {
    const {clientX, clientY} = useMousePosition();
    const [cursor] = useContext(CursorContext);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        return () => {
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
    
    return (
        <div 
        style={{ 
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 98,
            pointerEvents: "none"
        }}
        >
        <svg
            width={70}
            height={70}
            viewBox="0 0 70 70"
            style={{
            position: "absolute",
            transform: `translate3d(${clientX-(cursor.active ? 75 : 50)}px, ${clientY-(cursor.active ? 75 : 50)}px, 0px) scale(${cursor.active ? 2.5 : 1})`,
            // stroke: cursor.active ? "black" : "rgb(252, 0, 0,0.5)",
            strokeWidth: 1,
            fill: cursor.active ? "rgb(252, 0, 0,0.1)" : "rgb(252, 0, 0,0.5)",
            transition:"0.1s cubic-bezier(0.1, 0, 0.1, 0.1), opacity 0.40s ease",
            opacity: isVisible && clientX > 1 ? 1 : 0,
            }}
        >
            <circle
            cx="50"
            cy="50"
            r="12"
            />
        </svg>
        </div>
    );
};


export default Cursor;