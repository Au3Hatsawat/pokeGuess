import { useState } from "react";
import SearchableDropdown from "../../components/search_bar";

const Logo = (prop) => {
    const pokeList = prop.poke;
    const animals = [
        { id: 1, name: "Graspus graspus" },
        { id: 2, name: "Grus rubicundus" },];
    
    const [value, setValue] = useState("Select option...");    
    
    return (
        <div className='flex justify-between mt-5'>
            <div className='font-PokemonSolid text-4xl '>PokéGuess??</div>
            <div className="flex items-center gap-10">
                <SearchableDropdown
                    options={pokeList.results}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                />
            </div>
        </div>
    )
}

export default Logo;