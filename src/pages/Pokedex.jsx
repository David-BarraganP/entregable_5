import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";



const Pokedex = () => {
  const [allPokemons,setAllPokemons] = useState([])
  const [pokemonName,setPokemonName] = useState("")
  const [types,setTypes] = useState([])


  const trainerName = useSelector((store) => store.trainerName.name);

  const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName))
 

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())
  }

  const handleChangeTipe = (e) => {
    const url = e.target.value
    axios
    .get(url)
    .then(({data}) => {
      if(url.includes("type")){
        // ? obtuvimos pokemos por tipo
       const pokemonFormat = data.pokemon.map((pokemon) => pokemon.pokemon)
       setAllPokemons( pokemonFormat)
      }else{
        //? obtuvimos todos los  pokemos 
        setAllPokemons(data.results)
      }
    })
    .catch((err) => console.log(err))
  }



 useEffect(() => {
  axios
  .get('https://pokeapi.co/api/v2/pokemon?limit=1292')
  .then(({data}) => setAllPokemons(data.results))
  .catch((err) => console.log(err))
 },[])
  

 useEffect(() => {
  axios
  .get('https://pokeapi.co/api/v2/type')
  .then(({data}) => setTypes(data.results))
  .catch((err) => console.log(err))
 },[])
  


  return (
    <section> 
     <Header />
       <main>
        <p> 
          <b> Welcome {trainerName}</b>, here can you find you favorite pokemon
         </p>
         <form onSubmit={handleSubmit}>
          <div>
            <input 
            name="pokemonName" 
            placeholder="Search pokemon" 
            type="text" />
            <button  className="border-2 p-1 bg-red-600 hover:bg-black text-white rounded-md"
            >Search</button>
          </div>
          <select onChange={handleChangeTipe}>
            <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">All pokemon</option> 
            {
              types.map((type) => (
                 <option
                 value={type.url}
                  className="capitalaze" 
                  key={type.name}>{type.name}</option>
                 ))}
          </select>
         </form>

        <PokemonList 
         pokemons={pokemonsByName}

         />
       </main>
    </section>
  )
}

export default Pokedex
