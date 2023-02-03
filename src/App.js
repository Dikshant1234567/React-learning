import React from "react";
import "./App.css"
import Card from "./Components/Card";
import Heading from "./Components/Heading";
import Sdata from "./Sdata"; ;

function Ncard(value){
    return (
        <Card
     src={value.src}
     tittle={value.tittle}
     link = {value.link}
     sname={value.sname} 
    />
    )
}
   

function App(){
return(
    <>
  <Heading/>
  <div className="card-main">
    
    
    {Sdata.map(Ncard)}
    
    
   
  </div>
  </>
) 
}

export default App;
