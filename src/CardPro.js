import React from "react";
import Section from "./Section/Section";

export default function CardPro() {
  return (
    <div className="container-row">
      <Section 
        img="GB1.png"
        title="Switch your current account
"
        text="Want to keep your banking all in one place? It only takes seven days and we'll take care of all the tricky admin bits, like moving your Direct Debits over.

"
        link="Switch to NatWest"
      />

      <Section 
        img="GB2.png"
        title="Video chat, day or night
"
        text="Looking to move? Starting a family? Whatever goal you’re working towards, a Check-in with NatWest could help get you closer. Criteria applies.

"
        link="More about video banking"
      />

      <Section  
        img="GB1.png"
        title="Make your home more energy efficient
"
        text="Our free Home Energy Plan could show you how to:

Reduce your energy usage 
Make your home greener
"
        link="Get your Home Energy Plan"
          />


          
    </div>
  );
}
