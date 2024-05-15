'use client';

import React, { useEffect, useState } from "react";
import MacWindow from "./components/macWindow";
import { GREETING, BIO } from "./constants/string"

import { TypeAnimation } from "react-type-animation";

const props = {
  greeting: GREETING,
  name: BIO


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