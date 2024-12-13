import PokeCard from "../../components/pokemon_card";

const Middle = (prop) => { 
    const pokeList = prop.poke;
    
    return (
      <div className='grid lg:grid-cols-3 gap-10 overflow-y-auto px-10 py-5'>
        {
          pokeList?.map((object , index)=>(
            <PokeCard key={index} url = {object.url}  />
          ))
        }
        <div className="flex justify-center lg:col-span-3"><button onClick={prop.load} className="text-[#fff] bg-black rounded-md">Load more Pokémon</button></div>
      </div>
    )
}

export default Middle;