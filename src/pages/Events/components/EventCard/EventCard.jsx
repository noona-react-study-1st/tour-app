import React from "react";
import "./EventCard.style.css";

const EventCard = ({ event }) => {
  console.log("image", event.firstimage); 
  
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `${event?.firstimage}` + 
          ")",
      }}
      className="event-card"
    >
    </div>
  );
};

export default EventCard;