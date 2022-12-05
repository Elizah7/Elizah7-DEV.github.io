import React from "react";
import Stack from 'react-bootstrap/Stack';


const  Skills = ()=> {
    return (
      <Stack  direction="horizontal" gap={3} className="stack">
        <div className="bg-light border">
            <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/>
        </div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
      </Stack>
    );
  }
  
  export { Skills}