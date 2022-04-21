import { useEffect, useState } from "react"

export const Searchbox=()=>{

const [text, setText]=useState("");

useEffect(()=>{
    console.log(text);
},[text])

    return (
    <>
    
    <input placeholder="I am a search box" type="text" onChange={(e)=>{setText(e.target.value)}}/>
    </>
    
    )
    
    }
    
    