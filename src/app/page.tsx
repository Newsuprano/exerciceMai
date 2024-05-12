'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {

const [color, setColor] = useState('red');
const [text, setText] = useState('Click to Start');

// click on start
  function onStart() {
    console.log('clicked');
    if (color === 'red'){
      setColor('blue');
    }
    if (color === 'blue'){
      setColor('green');
    }
    if (color === 'green'){
        setColor('red');
    }
    // setTimeout(() => {
    // console.log('on timeout');
    // setText("Started")
  // }, 2000);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div 
    className={`flex h-20 w-1/2 items-center justify-center`}
    style={{backgroundColor:color}}
    onClick={() => onStart()}>  
    <p>{text}</p>
    </div>
    </main>
  );
}
