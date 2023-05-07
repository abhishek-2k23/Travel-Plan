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
      <div className="refresh flex flex-col justify-center items-center gap-y-3 capitalize h-[100vh]">
          <h4 className="text-2xl opacity-80 font-[700] tracking-wide">No tours Left </h4>
          <button className="btn-white py-1 px-16 bg-slate-100 border hover:bg-slate-200 border-slate-300" onClick={()=>setTour(data)}> Refresh</button>
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
