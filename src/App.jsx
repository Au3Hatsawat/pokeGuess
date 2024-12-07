import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Types from './components/types_component';
import Logo from './sections/logo';
import Middle from './sections/middle';
import Contact from './sections/contact';



function App() {

  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [picture , setPicture] = useState();

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`, {
          signal: abortController.signal
        });

        setPoke(response.data);
        setError("");
        const getTotal = () => {
          var temp = 0;
          response.data?.stats?.map((obj) => (temp += parseInt(obj.base_stat, 10)));
          return temp;
        };
        setPicture(response.data?.types?.map((obj) => obj.type.name));
        setTotal(getTotal());
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();

  }, [])



  console.log(poke);
  console.log(picture);


  return (
    <div className='grid grid-rows-[10%_85%_5%] h-screen mx-5'>
      {/* logo */}
      <Logo />

      {/* middle */}
      <Middle total={total} poke={poke} picture={picture} />

      {/* contact */}
      <Contact />
    </div>
  )
}

export default App
