import React, { useState, useEffect } from 'react';
import Header from './Header';
import Recipe from './Recipe';

import Axios from 'axios';



function App() {

  const [search, setSearch] = useState("chicken");

  const [recipes, setRecipes] = useState([]);


  const APP_ID = "32bf42e6"
  const APP_KEY = "48b252371c394bd2ed6c38326a670e37"


  useEffect( ()=>{
    getRecipes();
  },[]);



  const getRecipes=async() => {

    const result =await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)

    
    setRecipes(result.data.hits);
  };


  const onInputChange = e => {
    setSearch(e.target.value)
  }


  const onSearchClick=()=>{
    getRecipes();
  }

  return (
    <div className="App">

      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
      <Recipe recipes={recipes} />
      </div>
      
    </div>
  );
}

export default App;
