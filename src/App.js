import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'


function App(){
    let [colors,setColors] =useState( [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return  <ColorBlock color={color} key={i} />;
            
    });
    const checkColor=(newColor)=>{
        const cool=new Option().style;
        cool.color=newColor
        return cool.color!==''
    }
      const addColor=(newColor)=>{
        if(checkColor(newColor)){
        setColors([...colors,newColor])
      }
      }
    return <div className="App">
    {colorMap} 
        <ColorForm addColor= {addColor} />

</div>;
}

export default App