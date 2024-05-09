import React from "react";
import MacWindow from "./macWindow";
import { title } from "process";

const props = {
  title: "taylor was here",
// Adding info here
}

export default function Home() {
  return (
    <main> 
      <div className="windowPositioning">
        <MacWindow windowProps={props}/>
      </div>
    </main>
  );
}
