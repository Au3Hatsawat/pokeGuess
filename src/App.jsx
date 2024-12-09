import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Logo from './sections/logo';
import Middle from './sections/middle';
import Contact from './sections/contact';



function App() {

  const [pokeList, setPokeList] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "pokemon?limit=100000&offset=0";

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/${url}`, {
          signal: abortController.signal
        });

        setPokeList(response.data);
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


  console.log(pokeList);


  return (
    <div className='grid grid-rows-[10%_85%_5%] h-screen mx-5'>
      {/* logo */}
      <Logo />

      {/* middle */}
      <Middle poke={pokeList}/>

      {/* contact */}
      <Contact />
    </div>
  )
}

export default App
