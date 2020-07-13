import React from 'react';
// import ProblemAnalysis from './Learning/ProblemAnalysis';
import Provider from './Learning/Provider';
import Context from './Learning/Context';
import './App.css';

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <Context.Consumer>
      {
        (context) => (
          <React.Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.missionName}</p>
            <h4>Mission Status: {context.data.option}</h4>
            <button className="acceptButton" onClick={context.isMissionAcception}>Accept Mission</button>
          </React.Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () => {
  return(
    <div className="container">
      {/* <div className="learning">
        <h3>Learning 1: Problem Analysis</h3> 
        <ProblemAnalysis />
      </div> */}
      <div className="learning">
        <h3>Learning: Create Context, Provider and Consumer</h3>
        <Provider>
          <Agents />
        </Provider>
      </div>
    </div>
  )
}

export default App;
