const Logo = () => {
    return (
        <div className='flex justify-between mt-5'>
            <div className='font-PokemonSolid text-4xl '>PokéGuess??</div>
            <div className="flex items-center gap-10">
                <div className="bg-black text-white px-2 py-1 rounded-md hover:bg-gray-600">
                    <a>PLAY NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Logo;