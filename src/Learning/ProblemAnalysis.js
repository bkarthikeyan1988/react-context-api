import React, {useState} from 'react';

const GrandChild = props => {
  return(
    <div>
      <h4>Grand Child</h4>
      <h5>Props Inherit: <Child brand={props.brand} /></h5>
    </div>
  );
};

const Child = (props) => {
  return(
    <div>
      <h2>Child Component</h2>
      <h3>Props: {props.brand}</h3>
    </div>
  )
};

const ProblemAnalysis = () => {
  const [brandName] = useState("Benz");
  return(
    <div>
      <h1>Context API basic</h1>
      <Child brand={brandName} />
      <GrandChild brand={brandName} />
    </div>
  )
}

export default ProblemAnalysis;