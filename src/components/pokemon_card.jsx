import { useEffect, useState } from "react";
import Types from "./types_component";
import axios from "axios";

const PokeCard = (prop) => {
    const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [type , settype] = useState([]);
  const url = prop.url;

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`${url}`, {
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

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();

    }, [])

    const typeColor = () => {
      switch (type[0]) {
        case "bug":
          return "bg-green-300";
          break;
        case "dark" :
          return "bg-gray-600";
          break;
        case "dragon" :
          return "bg-blue-500";
          break;
        case "electric" :
          return "bg-yellow-200";
          break;
        case "fairy" :
          return "bg-pink-300";
          break;
        case "fighting" :
          return "bg-red-300";
          break;
        case "fire" :
          return "bg-orange-300";
          break;
        case "flying" :
          return "bg-blue-100";
          break;
        case "ghost" :
          return "bg-blue-700";
          break;
        case "grass" :
          return "bg-green-400";
          break;
        case "ground" :
          return "bg-orange-500";
          break;
        case "ice" :
          return "bg-blue-300";
          break;
        case "normal" :
          return "bg-gray-500";
          break;
        case "poison" :
          return "bg-purple-400";
          break;
        case "psychic" :
          return "bg-red-300";
          break;
        case "rock" :
          return "bg-stone-400";
          break;
        case "steel" :
          return "bg-blue-200";
          break;
        case "water" :
          return "bg-blue-400";
          break;
        default :
          return "bg-gray-400"
          break;
        }
    };

    const getShadow = () => {
      switch (type[0]) {
        case "bug":
          return "shadow-green-300/50";
          break;
        case "dark" :
          return "shadow-gray-600/50";
          break;
        case "dragon" :
          return "shadow-blue-500/50";
          break;
        case "electric" :
          return "shadow-yellow-200/50";
          break;
        case "fairy" :
          return "shadow-pink-300/50";
          break;
        case "fighting" :
          return "shadow-red-300/50";
          break;
        case "fire" :
          return "shadow-orange-300/50";
          break;
        case "flying" :
          return "shadow-blue-100/50";
          break;
        case "ghost" :
          return "shadow-blue-700/50";
          break;
        case "grass" :
          return "shadow-green-400/50";
          break;
        case "ground" :
          return "shadow-orange-500/50";
          break;
        case "ice" :
          return "shadow-blue-300/50";
          break;
        case "normal" :
          return "shadow-gray-500/50";
          break;
        case "poison" :
          return "shadow-purple-400/50";
          break;
        case "psychic" :
          return "shadow-red-300/50";
          break;
        case "rock" :
          return "shadow-stone-400/50";
          break;
        case "steel" :
          return "shadow-blue-200/50";
          break;
        case "water" :
          return "shadow-blue-400/50";
          break;
        default :
          return "shadow-gray-400/50"
          break;
        }
    };

    console.log(poke);

    return (
        <div className={`grid lg:grid-cols-[40%_60%] rounded-3xl shadow-lg ${getShadow()}`}>

          {/* left */}
          <div className={`grid rounded-b-[6rem] rounded-t-3xl lg:rounded-r-[6rem] lg:rounded-l-3xl ${typeColor()}`}>
            <div className='mx-5 my-3 p-0 font-extrabold text-3xl text-slate-50'>{poke?.id}</div>
            <div className="flex justify-center lg:block">
              <img className='scale-110 hover:scale-125 lg:scale-150 transition-all lg:hover:scale-[170%]' src={poke?.sprites?.other.home.front_default} alt={poke?.name} />
            </div>
          </div>

          {/* right */}
          <div className='grid my-3 ml-9 mr-3'>
            {/* Stats */}
            <div>
              <div className='flex justify-between font-semibold text-xl capitalize'>
                <div>Base stats</div>
                <div>{poke?.name}</div>
              </div>
              <div className="divide-y divide-slate-400">
                
                {poke?.stats?.map((object, index) => (
                  <div key={index} className="flex justify-between py-1 capitalize">
                    <div className="text-gray-700">{object.stat.name}</div>
                    <div>{object.base_stat}</div>
                  </div>
                ))}
                <div className="py-1 flex justify-between">
                  <div className="text-gray-700">Total</div>
                  <div className="font-semibold">{total}</div>
                </div>
                
              </div>
            </div>

            {/* Abilities */}
            <div className='font-semibold text-lg'>Abilities</div>
            <div className="divide-y divide-slate-400">
              {poke?.abilities?.map((object, index) => (
                <div key={index} className="py-1 capitalize" >{object.ability.name}</div>
              ))}
            </div>

            {/* Types */}
            <div>
              <div className='font-semibold text-lg'>Types</div>
              <div>
                <div className='flex'>
                  {
                    type?.map((object , index) => (
                      <Types key = {index} type = {object}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PokeCard;