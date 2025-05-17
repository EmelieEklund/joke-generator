import { useState } from "react";
import Button from './components/Button';
import Joke from './components/Joke';
import { fetchJoke } from "./http.js";


export default function App() {
   const [fetchResult, setFetchResult] = useState([]);

  const handleFetchJoke = async () => {
    const result = await fetchJoke();    
    setFetchResult(result);
  }


  return (
    <div className="App d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-2 mb-5">Need a laugh?</h1>
        

        <Joke text={fetchResult} />

        <Button text = "Show me a joke!" className={"mt-4"} onClick = {() => handleFetchJoke()} />


      
    </div>
  );
}


