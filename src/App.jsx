import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Logo from './sections/logo';
import Middle from './sections/middle';
import Contact from './sections/contact';



function App() {

  const [pokeList, setPokeList] = useState("");
  const [pokeFilter, setPokeFilter] = useState([]);
  const [pokeAmong, setpokeAmong] = useState(6);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const path = "pokemon?limit=100000&offset=0";

  const getpokeAmong = () => {
    setpokeAmong(pokeAmong+6);
  };

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/${path}`, {
          signal: abortController.signal
        });

        setPokeList(response.data);
        setPokeFilter(response.data.results.filter((obj,idx)=>(idx < pokeAmong)));
        setError("");
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();

  }, []);
  
  useEffect(()=>{
    setPokeFilter(pokeList?.results?.filter((obj,idx)=>(idx < pokeAmong)));
  },[pokeAmong])

  console.log(pokeList);
  console.log(pokeFilter);


  return (
    <div className='grid grid-rows-[10%_85%_5%] h-screen mx-5'>
      {/* logo */}
      <Logo poke={pokeList}/>

      {/* middle */}
      <Middle poke={pokeFilter} load={getpokeAmong}/>

      {/* contact */}
      <Contact />
    </div>
  )
}

export default App
