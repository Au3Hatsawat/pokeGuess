import PokeCard from "../../components/pokemon_card";

const Middle = (prop) => { 
    const pokeList = prop.poke;
    
    return (
      <div className='grid lg:grid-cols-4 gap-10 overflow-y-auto px-10 py-5'>
        {
          pokeList?.results?.filter((obj,idx)=>(idx < 8)).map((object , index)=>(
            <PokeCard key={index} url = {object.url}  />
          ))
        }
      </div>
    )
}

export default Middle;