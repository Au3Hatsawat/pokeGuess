import Types from "../../components/types_component"; 

const Middle = (prop) => {
    const poke = prop.poke;
    const total = prop.total;
    const picture = prop.picture;

    return (
        <div className='grid justify-center items-center'>
        <div className='grid grid-cols-[40%_60%] w-min-[85vh] h-min-[50vh] rounded-3xl shadow-lg shadow-green-500/50'>

          {/* left */}
          <div className='grid rounded-r-[6rem] rounded-l-3xl bg-green-300'>
            <div className='mx-5 my-3 font-extrabold text-3xl text-slate-50'>{poke?.id}</div>
            <div>
              <img className='scale-125 transition-all hover:scale-[140%]' src={poke?.sprites?.other.home.front_default} alt={poke?.name} />
            </div>
          </div>

          {/* right */}
          <div className='grid my-3 ml-9 mr-3'>
            {/* Stats */}
            <div>
              <div className='font-semibold text-lg'>{poke?.name}</div>
              <div>
                {poke?.stats?.map((object, index) => (
                  <div key={index}>{object.stat.name} {object.base_stat}</div>
                ))}
                <div>
                  total {total}
                </div>
              </div>
            </div>

            {/* Abilities */}
            <div>
              <div className='font-semibold text-lg'>Abilities</div>
              {poke?.abilities?.map((object, index) => (
                <div key={index} >{object.ability.name}</div>
              ))}
            </div>

            {/* Types */}
            <div>
              <div className='font-semibold text-lg'>Types</div>
              <div>
                <div className='flex'>
                  {
                    picture?.map((object , index) => (
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