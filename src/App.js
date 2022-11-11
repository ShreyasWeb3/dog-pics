import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState("random")


  const extractData = async () => {
    let url ;
    if(breed === "random"){
      url = "https://dog.ceo/api/breeds/image/random"

    }else {
      url = `https://dog.ceo/api/breed/${breed}/images/random`
    }
    const res = await axios.get(url)
    setDogImage(res.data.message);

  }
    
  const handleChange = (e) => {
    setBreed(e.target.value);
  }

  useEffect(() => {
    extractData();
  },[breed])

  return (
    <div className="App">
    <h1>Doggie</h1>
    <label>Select the Dog breed &nbsp;&nbsp;</label>
      <select name='breed' value={breed} onChange={(e) => handleChange(e)}>
      <option value="random">Random</option>  
      <option value="beagle">Beagle</option>
      <option value="boxer">Boxer</option>
      <option value="dalmatian">Dalmatian</option>
      <option value="husky">Husky</option>
      </select>
      <div>
        <img src={dogImage} />
      </div>
      <div>
      <button onClick={extractData}>Next</button>
      </div>
    </div>
  );
}

export default App;
