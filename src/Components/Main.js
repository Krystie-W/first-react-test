import React from "react";
import Image from "./Image";
import Header2 from "./Header2";
import Method from "./Method";
import Container from "./Container";
import List from "./List";


function Main() {
  return (
        <div className="columns">
        <Container> 
            <Image pic={'https://i.pinimg.com/564x/93/1c/39/931c3980a5e74c9638691ba8fac07e30.jpg'} />
        </Container>
        <Container> 
            <Header2 headerTwo={'Ingredients'} />
            <List />
        </Container>
        <Container> 
            <Header2 headerTwo={'Method'} />
            <Method />
        </Container>
        </div>
  );
}

export default Main;