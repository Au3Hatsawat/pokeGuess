import { useEffect, useState } from "react";
import Types from "../../components/types_component"; 

const Middle = (prop) => {
    const poke = prop.poke;
    const total = prop.total;
    const type = prop.type;    
    const color = "bg-"+prop.color;

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
          return "shadow-shadow-blue-400/50";
          break;
        default :
          return "shadow-gray-400/50"
          break;
        }
    };

    return (
        <div className='grid justify-center items-center'>
        <div className={`grid grid-cols-[40%_60%] w-min-[85vh] h-min-[50vh] rounded-3xl shadow-lg ${getShadow()}`}>

          {/* left */}
          <div className={`grid rounded-r-[6rem] rounded-l-3xl ${color}`}>
            <div className='mx-5 my-3 font-extrabold text-3xl text-slate-50'>{poke?.id}</div>
            <div>
              <img className='scale-125 transition-all hover:scale-[140%]' src={poke?.sprites?.other.home.front_default} alt={poke?.name} />
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
      </div>
    )
}

export default Middle;