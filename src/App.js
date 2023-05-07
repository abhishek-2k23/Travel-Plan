import React,{useState} from "react";
import data from './data';
import Tour from './Components/Tour';
const App = () => {
  const [tours, setTour] =  useState(data);

  function removeCard(id){
    // eslint-disable-next-line no-lone-blocks
    {
      let newTour = tours.filter((tour) => tour.id !== id);
      setTour(newTour);
    }
  }
  if(tours <= 0){
    return(
      <div className="refresh">
          <h4>No tours Left </h4>
          <button className="btn-white" onClick={()=>setTour(data)}> Refresh</button>
      </div>
    );
  }
  return (
    <div className="App flex justify-center items-center mb-5">
      <Tour tours={tours} removeCard={removeCard}></Tour>
    </div>
    );
};

export default App;
