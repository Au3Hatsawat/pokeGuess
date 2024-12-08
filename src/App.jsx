import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Logo from './sections/logo';
import Middle from './sections/middle';
import Contact from './sections/contact';



function App() {

  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [type , settype] = useState([]);
  const [color, setColor] = useState("");
  const [id, setId] = useState("1");


  const typeColor = (target) => {
    switch (target) {
      case "bug":
        return "green-300";
        break;
      case "dark" :
        return "gray-600";
        break;
      case "dragon" :
        return "blue-500";
        break;
      case "electric" :
        return "yellow-200";
        break;
      case "fairy" :
        return "pink-300";
        break;
      case "fighting" :
        return "red-300";
        break;
      case "fire" :
        return "orange"+"-"+"300";
        break;
      case "flying" :
        return "blue-100";
        break;
      case "ghost" :
        return "blue-700";
        break;
      case "grass" :
        return "green-400";
        break;
      case "ground" :
        return "orange-500";
        break;
      case "ice" :
        return "blue-300";
        break;
      case "normal" :
        return "gray-500";
        break;
      case "poison" :
        return "purple-400";
        break;
      case "psychic" :
        return "red-300";
        break;
      case "rock" :
        return "stone-400";
        break;
      case "steel" :
        return "blue-200";
        break;
      case "water" :
        return "blue-400";
        break;
      default :
        return "gray-400"
        break;
      }
  };


  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
          signal: abortController.signal
        });

        setPoke(response.data);
        setError("");
        const getTotal = () => {
          var temp = 0;
          response.data?.stats?.map((obj) => (temp += parseInt(obj.base_stat, 10)));
          return temp;
        };
        settype(response.data?.types?.map((obj) => obj.type.name));
        setTotal(getTotal());
        setColor(typeColor(response.data?.types[0].type.name));

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();

  }, [id])


  useEffect(()=>{
    const interval = setInterval(() => setId(Math.floor(Math.random() * 1025 + 1)),60000);
    return () => {
      clearInterval(interval);
    };
  },[]);


  console.log(poke);


  return (
    <div className='grid grid-rows-[10%_85%_5%] h-screen mx-5'>
      {/* logo */}
      <Logo />

      {/* middle */}
      <Middle total={total} poke={poke} type={type} color={color} />

      {/* contact */}
      <Contact />
    </div>
  )
}

export default App
